import { axiosInstance } from './axiosInstance.js';

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/register', payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/auth/login', payload);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
