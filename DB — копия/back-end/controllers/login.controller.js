import asyncHandler from 'express-async-handler';
import Staff from '../models/model.staff.js';
import generateToken from '../utils/jwt-gen.js';

const loginController = {};

loginController.authUser = asyncHandler(async (req, res) => {
    const { name, password } = req.body;

    const staff = await Staff.findOne({ name });

    if (!name && !password) {
        res.status(400);
        throw new Error("Введите имя и пароль");
    } else if (!name) {
        res.status(400);
        throw new Error("Введите имя");
    } else if (!password) {
        res.status(400);
        throw new Error("Введите пароль");
    }
    

    if (staff && password == staff.password) {
        res.json({
            _id: staff._id,
            name: staff.name,
            isDirector: staff.isDirector,
            isAdmin: staff.isAdmin,
            isBaker: staff.isBaker,
            isSeller: staff.isSeller,
            token: generateToken(staff._id)
        });
    } else {
        res.status(401);
        throw new Error('Введены неверные данные');
    }
});

export default loginController;