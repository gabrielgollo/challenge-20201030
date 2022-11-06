const OpenFoodFactProductListService = require('../services/open-food-fact-product-list-service')

const logger = require('log4js').getLogger('Products Controller')
class ProductsController {
    static async getAllProducts () {
        const products = []
        return products
    }

    static async getProductByCode (data) {
        const product = {}
        return product
    }

    static async createProductByFileName (data) {
        try {
            const { fileName } = data
            const response = await OpenFoodFactProductListService.getProductsByFile(fileName)
            return {
                response,
                message: 'Product created'
            }
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = ProductsController
