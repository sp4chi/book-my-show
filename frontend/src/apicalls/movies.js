import { axiosInstance } from './axiosInstance';

export const AddMovie = async (payload) => {
  try {
    const response = await axiosInstance.post('/movies/add-movie', payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const GetAllMovies = async () => {
  try {
    const response = await axiosInstance.get('/movies/get-all-movies');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
