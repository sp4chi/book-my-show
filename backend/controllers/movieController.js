import Movie from '../models/movieModal.js';

export const addMovie = async (req, res) => {
  try {
    //req.body.genre = [...req.body.genre.split(',')];

    await Movie.init();
    await Movie.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'movie added successfully!',
    });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      status: 'failed',
      message: 'failed to add movie',
    });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      status: 'success',
      message: 'movies fetched',
      data: movies,
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      status: 'failed',
      message: 'failed to fetch movies',
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'movie deleted successfully',
    });
  } catch (error) {
    console.log(error.message);
    res.status(403).json({
      status: 'failed',
      message: 'could not delete movie',
    });
  }
};

export const editMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      message: 'movie edited successfully',
    });
  } catch (error) {
    console.log(error.message);
    res.status(403).json({
      status: 'failed',
      message: 'cannot edit',
    });
  }
};
