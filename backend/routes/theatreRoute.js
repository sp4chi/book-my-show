import express from 'express';
import { addTheatre } from '../controllers/theatreController.js';

const router = express.Router();

router.post('/add-theatre', addTheatre);

export default router;
