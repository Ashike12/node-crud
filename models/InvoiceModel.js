const mongoose = require('mongoose')

const invoiceSchema = mongoose.Schema(
    {
        Identifier: {
            type: String,
            required: [true]
        },
        CustomerName: {
            type: String,
            required: true,
            default: 0
        },
        CustomerAddress: {
            type: String,
            required: true,
        },
        InvoiceDate: {
            type: Date,
            required: false,
        },
        InvoiceDeliveryDate: {
            type: Date,
            required: false,
        },
        TotalBill: {
            type: Number,
            required: true,
        },
        BillPaymentAmount: {
            type: Number,
            required: true,
        },
        BillDueAmount: {
            type: Number,
            required: true,
        },
        TotalNumberOfProducts: {
            type: Number,
            required: true,
        },
        Category: {
            type: String,
            required: true,
        },
        PdfFileId: {
            type: String,
        }
    }
)


const Product = mongoose.model('Invoice', invoiceSchema);

module.exports = Product;