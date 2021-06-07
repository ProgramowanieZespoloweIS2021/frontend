import axios from 'axios';
import { getJwt } from '@utils/jwt';

export const API = {
    get: (apiUrl: string, endpointUrl: string, params?: any) =>
        axios.get(`${apiUrl}/${endpointUrl}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            params,
        }),

    post: (apiUrl: string, endpointUrl: string, data?: Object) =>
        axios.post(`${apiUrl}${endpointUrl}`, data),

    postAuth: (apiUrl: string, endpointUrl: string, data?: Object) =>
        axios.post(`${apiUrl}/${endpointUrl}`, data, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
            },
        }),

    getAuth: (serviceUrl?: string, endpointUrl?: string) =>
        axios.get(`${serviceUrl}${endpointUrl}`, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
            },
        }),

    deleteAuth: (serviceUrl?: string, endpointUrl?: string) =>
        axios.delete(`${serviceUrl}${endpointUrl}`, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
            },
        }),
};
