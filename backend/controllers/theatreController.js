import { createError } from '../middlewares/createError.js';
import Theatre from '../models/theatreModel.js';

export const addTheatre = async (req, res, next) => {
  try {
    await Theatre.init();
    await Theatre.create(req.body);
    res.status(200).json({
      status: 'success',
      message: 'theatre added successfully',
    });
  } catch (error) {
    console.log(error.message);
    next(createError(401, 'Theatre with same name already exists!'));
  }
};
