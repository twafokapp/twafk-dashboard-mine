import axios from 'axios';
import i18n from './i18n';
import { store } from '@/store/store';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  config => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.headers['lang'] = i18n.language;

    if (config.params) {
      config.params = {
        ...config.params,
        page: config.params.page || 1,
        limit: config.params.limit || 10,
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
