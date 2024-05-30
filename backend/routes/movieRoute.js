import express from 'express';
import {
  addMovie,
  deleteMovie,
  editMovie,
  getAllMovies,
} from '../controllers/movieController.js';
import { protect } from '../middlewares/authMiddleWare.js';

const router = express.Router();

router.post('/add-movie', protect, addMovie);
router.get('/get-all-movies', getAllMovies);
router.patch('/edit/:id', protect, editMovie);
router.delete('/delete/:id', protect, deleteMovie);

export default router;
