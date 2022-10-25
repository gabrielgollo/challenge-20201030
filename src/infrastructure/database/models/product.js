import MongoDb from '../mongodb/mongoose'
import ProductSchema from '../schemas/product-schema'

const connection = MongoDb.getOrCreateConnection()

const Product = connection.model('product', ProductSchema, 'products')

class ProductModel {
    static create (data) {
        return Product.create({
            ...data,
            status: 'In Queue'
        })
    }

    static deleteById (_id) {
        return Product.deleteOne({
            _id
        })
    }
}

export default ProductModel
