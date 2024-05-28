import express from 'express';
import { protect } from '../middlewares/authMiddleWare.js';
import { getCurrentUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/get-current-user', protect, getCurrentUser);

export default router;
