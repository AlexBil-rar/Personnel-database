import asyncHandler from 'express-async-handler';
import Order from '../models/model.order.js';

const adminController = {};

adminController.getOrder = asyncHandler(async (req, res) => {
    const order = await Order.find({});
    res.json(order);
});

adminController.updateOrder = asyncHandler(async (req, res) => {

    const { name, 
            phone, 
            height, 
            mass, 
            color, 
            decor, 
            date,
            addition,
            price} = req.body;

    const order = await Order.findById(req.params.id);

    if (order) {
        order.name = name;
        order.phone = phone;
        order.height = height;
        order.mass = mass;
        order.color = color;
        order.decor = decor;
        order.date = date;
        order.addition = addition;
        order.price = price;

        const updateProduct = await order.save();

        res.json(updateProduct);

    } else {
        res.status(404);
        throw new Error('Заказ не найден');
    }
});


export default adminController;
