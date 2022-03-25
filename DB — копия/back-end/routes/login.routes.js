import express from 'express';
import loginController from '../controllers/login.controller.js';

const router = express.Router();

const { authUser } = loginController;

router.post("/", authUser);

export default router;