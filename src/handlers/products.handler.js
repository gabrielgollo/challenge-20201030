const ProductsController = require('../controller/products.controller')

class ProductsHandler {
    /**
     * @api
     * @path /products
     * @method get
     * @function getAllProducts
     * @description That's the default '/products' route using method get
     */
    static getAllProducts (req, res) {
        const product = ProductsController.getAllProducts()
        res.status(200).json(product)
    }
}

module.exports = ProductsHandler
