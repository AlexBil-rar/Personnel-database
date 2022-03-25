import express from 'express';
import bakerController from '../controllers/baker.controllers.js';

const router = express.Router();

const { getOrder,
        updateOrder } = bakerController

router.route("/orders").get(getOrder)
router.route("/orders/:id").put( updateOrder)

export default router