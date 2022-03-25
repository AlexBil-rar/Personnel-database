import asyncHandler from 'express-async-handler';
import Order from '../models/model.order.js';

const bakerController = {};

bakerController.getOrder = asyncHandler(async (req, res) => {
    const order = await Order.find({});
    res.json(order);
});

bakerController.updateOrder = asyncHandler(async (req, res) => {

    const order = await Order.findById(req.params.id);

    if (order) {
        order.ready = req.body.ready || order.ready;

        const updateOrder = await order.save();

        res.json({
            _id: updateOrder._id,
            ready: updateOrder.ready
        });

    } else {
        res.status(404);
        throw new Error('Пользователь не найден');
    }
});

export default bakerController
