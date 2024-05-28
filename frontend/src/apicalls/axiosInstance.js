import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  /*timeout: 1000, */
  headers: {
    credentials: 'include',
    method: 'post',
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
