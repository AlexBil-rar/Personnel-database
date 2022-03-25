import express from 'express';
import sellerController from '../controllers/seller.controllers.js';

const router = express.Router();

const { createOrder } = sellerController

router.route("/orders").post(createOrder)

export default router