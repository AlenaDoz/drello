import { StoreType } from './../store/index';
import axios from 'axios';
import { logOut } from '../store/userSlice/userSlice';

let store: StoreType

export const injectStore = (_store: StoreType) => {
  store = _store;
};

const baseURL = 'https://final-task-backend-production-c179.up.railway.app';

export const axiosPrivate = axios.create({
  baseURL,
});

axiosPrivate.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('token');
  config.headers = {
    ...config.headers,
    authorization: `Bearer ${token}`,
  };
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 403) {
      store.dispatch(logOut());
    }
    return Promise.reject(error);
  }
);

export const axiosPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
