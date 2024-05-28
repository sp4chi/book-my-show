import { axiosInstance } from './axiosInstance.js';

export const GetCurrentUser = async () => {
  try {
    /**
     * Send direct get request ,i.e, without using axiosInstance, or use axios interceptor
     */
    const response = await axiosInstance.get('/user/get-current-user');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
