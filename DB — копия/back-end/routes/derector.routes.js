import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import { DerectorProtect } from '../middleware/admin.middleware.js';
import derectorController from '../controllers/derector.controller.js';

const router = express.Router();

const { getStaff,
        getOrder } = derectorController

router.route("/staffs").get( getStaff)
router.route("/orders").get( getOrder)

export default router