import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  // withCredentials: true,
  timeout: 5000,
});

request.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('err' + error);
    return Promise.reject(error);
  },
);

export default request;
