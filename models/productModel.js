const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        Quantity: {
            type: Number,
            required: true,
            default: 0
        },
        Price: {
            type: Number,
            required: true,
        },
        Image: {
            type: String,
            required: false,
        }
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;