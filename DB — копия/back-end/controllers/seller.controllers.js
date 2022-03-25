import asyncHandler from 'express-async-handler';
import Order from '../models/model.order.js';

const sellerController = {};

sellerController.createOrder = asyncHandler(async (req, res) => {
    const { name, 
            phone, 
            height,
            mass,
            color,
            decor,
            date,
            addition,
            price   } = req.body;

    const order = new Order({
        name, 
        phone, 
        height,
        mass,
        color,
        decor,
        date,
        addition,
        price
    });

    const createOrder = await order.save();
    res.status(201).json(createOrder);
})

export default sellerController
