import axios from 'axios';
import { getJwt } from '@utils/jwt';

export const API = {
    get: async (apiUrl: string, endpointUrl: string, params?: any) =>
        axios.get(`${apiUrl}/${endpointUrl}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            params,
        }),

    post: async (apiUrl: string, endpointUrl: string, data?: Object) => {
        return axios.post(`${apiUrl}${endpointUrl}`, data);
    },

    postAuth: async (apiUrl: string, endpointUrl: string, data?: Object) =>
        axios.post(`${apiUrl}/${endpointUrl}`, data, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
            },
        }),

    getAuth: async (serviceUrl?: string, endpointUrl?: string, params?: any) =>
        axios.get(`${serviceUrl}${endpointUrl}`, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            params,
        }),

    deleteAuth: async (serviceUrl?: string, endpointUrl?: string) =>
        axios.delete(`${serviceUrl}${endpointUrl}`, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
            },
        }),
};
