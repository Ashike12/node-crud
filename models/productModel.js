const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        Title: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        Code: {
            type: String,
            required: true,
            default: 0
        },
        Price: {
            type: Number,
            required: true,
        },
        Description: {
            type: Array,
            required: false,
        },
        QuantityInStock: {
            type: Number,
            required: true,
        },
        TotalQuantity: {
            type: Number,
            required: true,
        },
        TotalSold: {
            type: Number,
            required: true,
        },
        Color: {
            type: String,
            required: true,
        },
        Category: {
            type: String,
            required: true,
        },
        Tags: {
            type: Array,
            required: false,
        }
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;