const mongoose = require('mongoose')

const productSellHistorySchema = mongoose.Schema(
    {
        InvoiceId: {
            type: String,
            required: [true, 'INVALID_INVOICE_ID']
        },
        ProductId: {
            type: String,
            required: [true, 'INVALID_PRODUCT_ID'],
            default: 0
        }
    }
)


const Product = mongoose.model('ProductSellHistory', productSellHistorySchema);

module.exports = Product;