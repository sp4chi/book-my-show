import express from 'express';
import { addMovie, getAllMovies } from '../controllers/movieController.js';

const router = express.Router();

router.post('/add-movie', addMovie);
router.get('/get-all-movies', getAllMovies);

export default router;
