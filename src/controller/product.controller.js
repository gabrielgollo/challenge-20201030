class ProductController {
    static async getAllProducts (req, res) {
        const products = []
        res.status(200).json(products)
    }
}

module.exports = ProductController
