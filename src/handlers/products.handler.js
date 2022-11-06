const ProductsController = require('../controller/products.controller')

class ProductsHandler {
    /**
     * @api
     * @path /products
     * @method get
     * @function getAllProducts
     * @description That's the default '/products' route using method get
     */
    static getAllProducts () {
        const products = ProductsController.getAllProducts()
        return {
            products,
            message: 'Default controller teste',
            status: 200
        }
    }

    /**
     * @api
     * @path /products/:code
     * @method get
     * @function getProductByCode
     * @description That's the '/products/:id' route using method get
     * @param {import('express').Request} req - The request object
     * @returns {object} - The product object
    */
    static getProductByCode (req) {
        const product = ProductsController.getProductByCode(req.params.code)

        return {
            product,
            message: 'Default controller teste',
            status: 200
        }
    }

    /**
     * @api
     * @path /products/create
     * @method post
     * @function createProductByFileName
     * @description That's the '/products' route using method post
     * @param {import('express').Request} req - The request object
     * @returns {object} - The product object
    */
    static async createProductByFileName (req) {
        const product = await ProductsController.createProductByFileName(req.body)
        return {
            product,
            message: 'Product created',
            status: 200
        }
    }
}

module.exports = ProductsHandler
