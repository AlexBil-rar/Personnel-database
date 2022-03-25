import express from 'express';
import adminController from '../controllers/admin.controllers.js';

const router = express.Router();

const { getOrder,
        updateOrder } = adminController

router.route("/orders").get(getOrder)
router.route("/orders/:id")
    .put(updateOrder)

export default router