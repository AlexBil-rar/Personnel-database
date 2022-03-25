import asyncHandler from 'express-async-handler';
import Staff from '../models/model.staff.js';
import Order from '../models/model.order.js'

const derectorController = {};

derectorController.getStaff = asyncHandler(async (req, res) => {
    const users = await Staff.find({});
    res.json(users);
});

derectorController.getOrder = asyncHandler(async (req, res) => {
    const order = await Order.find({});
    res.json(order);
})

export default derectorController;