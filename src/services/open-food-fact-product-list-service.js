const fs = require('fs')
const path = require('path')
const logger = require('log4js').getLogger('OpenFoodFactProductListService')
const GzipService = require('./gzip-service')
const Axios = require('axios')
const { FUN_FACTS_FILE_PATHS_API_URL, FUN_FACTS_FILES_API_URL } = process.env

class OpenFoodFactProductListService {
    static async getProductsByFile (fileName) {
        try {
            const fileCompletePath = path.join(process.cwd(), 'temp', fileName)

            const file = fs.createWriteStream(fileCompletePath)

            const hasError = await new Promise((resolve) => {
                Axios({
                    url: `${FUN_FACTS_FILES_API_URL}/${fileName}`,
                    method: 'GET',
                    responseType: 'stream'
                }).then(response => {
                    response.data.pipe(file)
                    let error = null
                    file.on('error', err => {
                        error = err
                        file.close()
                        logger.error(err)
                        resolve(true)
                    })
                    file.on('close', () => {
                        if (!error) {
                            resolve(true)
                        }
                    })
                })
            })
            if (hasError) return null
            const fileContent = await GzipService.decompressFile(fileCompletePath)

            return fileContent
        } catch (error) {
            logger.error(error)
            return []
        }
    }

    static async getProductsFiles () {
        const response = await fetch(FUN_FACTS_FILE_PATHS_API_URL)
        const data = await response.json()
        return data
    }
}

module.exports = OpenFoodFactProductListService
