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
    res.status(500).json({
      status: 'failed',
      message: 'failed to fetch movies',
    });
  }
};
