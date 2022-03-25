import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: "staffs"
    // },
    name: {
        type: String,
        required: true,
    
    },
    phone: {
        type: String,
        required: true,

    },
    height: {
        type: Number,
        required: true,

    },
    mass: {
        type: Number,
        required: true,

    },
    color: {
        type: String,
        required: true,
    },
    decor: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    addition: {
        type: String,
        required: true,
        default: null
    },
    price: {
        type: String,
        required: true
    },
    ready: {
        type: Boolean,
        default: false,
        required: true
    },
})

const Order = mongoose.model('orders', OrderSchema)

export default Order