import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const API = {
    get: (url: string) =>
        axios.get(`${API_URL}/${url}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }),
    postAuth: (url: string, data: Object) =>
        axios.post(`${API_URL}/${url}`, data),
};
