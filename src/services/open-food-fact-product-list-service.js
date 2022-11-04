const { FUN_FACTS_FILE_PATHS_API_URL, FUN_FACTS_FILES_API_URL } = process.env

class OpenFoodFactProductListService {
    static async getProductsByFile (file) {
        const response = await fetch(FUN_FACTS_FILES_API_URL + file)
        const data = await response.json()
        return data
    }

    static async getProductsFiles () {
        const response = await fetch(FUN_FACTS_FILE_PATHS_API_URL)
        const data = await response.json()
        return data
    }
}

module.exports = OpenFoodFactProductListService
