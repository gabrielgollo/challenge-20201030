const { Schema } = require('mongoose')

module.exports = new Schema({
    code: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['draft', 'trash', 'published'],
        required: true
    },
    imported_t: {
        type: Date,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    created_t: {
        type: Date,
        required: true
    },
    last_modified_t: {
        type: Date,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    brands: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    labels: {
        type: String,
        required: true
    },
    cities: {
        type: String,
        required: true
    },
    purchase_places: {
        type: String,
        required: true
    },
    stores: {
        type: String,
        required: true
    },
    ingredients_text: {
        type: String,
        required: true
    },
    traces: {
        type: String,
        required: true
    },
    serving_size: {
        type: String,
        required: true
    },
    serving_quantity: {
        type: Number,
        required: true
    },
    nutriscore_score: {
        type: Number,
        required: true
    },
    nutriscore_grade: {
        type: String,
        required: true
    },
    main_category: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }
})
