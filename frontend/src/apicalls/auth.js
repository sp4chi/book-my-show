import { axiosInstance } from './axiosInstance.js';

export const registerUser = async (payload) => {
  try {
    const response = await axiosInstance.post('auth/register', payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosInstance.post('auth/login', payload);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
