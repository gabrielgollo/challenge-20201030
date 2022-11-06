const fs = require('fs')
const { unzip } = require('node:zlib')

class GzipService {
    decompress (data) {
        return new Promise((resolve, reject) => {
            unzip(data, (err, buffer) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(buffer.toString())
                }
            })
        })
    }

    decompressFile (filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    this.decompress(data).then(resolve).catch(reject)
                }
            })
        })
    }
}

module.exports = GzipService
