import axios from 'axios';
import { getJwt } from '@utils/jwt';

const API_URL = 'http://localhost:8080';

export const API = {
    get: (url: string, params?: any) =>
        axios.get(`${API_URL}/${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            params,
        }),
    postAuth: (url: string, data: Object) =>
        axios.post(`${API_URL}/${url}`, data),

    getAuth: (serviceUrl?: string, endpointUrl?: string) =>
        axios.get(`${serviceUrl}${endpointUrl}`, {
            headers: {
                Authorization: `Bearer ${getJwt()}`,
            },
        }),
};
