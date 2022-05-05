import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { DefaultRes } from '../types';

export const ENVS = {
    dev: {
        BASE_URL: 'http://localhost:3001/v1',
    },
    stg: {
        BASE_URL: '',
    },
    prd: {
        BASE_URL: '',
    },
};
export const api = axios.create({
    baseURL: ENVS.dev.BASE_URL,
});

const onRequest = (axiosConfig: AxiosRequestConfig): AxiosRequestConfig => {
    return axiosConfig;
};
  
const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponseError = (error: AxiosError<DefaultRes>): Promise<AxiosError> => {
    return Promise.reject(error);
};

const onResponse = (response: AxiosResponse<DefaultRes>) => {
    console.log(`${response.config.url}`);
    return response;
};
// @ts-ignore
api.interceptors.request.use(onRequest, onRequestError);
// @ts-ignore
api.interceptors.response.use(onResponse, onResponseError);
  