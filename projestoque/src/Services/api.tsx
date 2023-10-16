import axios, {AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios';

//const baseURL = process.env.REACT_APP_PROD_URL;

const api = axios.create({
  baseURL: 'http://192.168.1.6:3000',
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig): Promise<any> => {
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error.response?.data),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response?.data,
  (error: AxiosError) => Promise.reject(error.response?.data),
);

export default api;

// import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
// import { GetData } from '../AsyncData';

// export const baseURL = process.env.REACT_APP_PROD_URL;

// const api = axios.create({
//   baseURL: `${baseURL}api/v1`,
// });

// api.interceptors.request.use(
//   async (config: AxiosRequestConfig): Promise<any> => {
//     if (config.data instanceof FormData) {
//       config.headers['Content-Type'] = 'multipart/form-data';
//     }
//     const t = await GetData('@Token');
//     const token = JSON.parse(t);
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error.response?.data)
// );

// api.interceptors.response.use(
//   (response: AxiosResponse) => response?.data,
//   (error: AxiosError) => Promise.reject(error.response?.data)
// );

// export default api;
