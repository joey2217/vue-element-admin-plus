import axios from 'axios';
import store from '@/store';

const request = axios.create({
  baseURL: '/api',
  // withCredentials: true,
  timeout: 5000,
});

const HEADER_KEY = 'Token';

request.interceptors.request.use(
  config => {
    const token = store.getters.token;
    config.headers[HEADER_KEY] = token;
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
