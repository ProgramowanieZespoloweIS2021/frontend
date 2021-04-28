import { getJwt } from '@utils/jwt';

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const mergeOptions = (options: any, jwtToken: any) => {
    const mergedOptions = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    if (jwtToken) mergedOptions.headers.Authorization = `Bearer ${jwtToken}`;

    return mergedOptions;
}

const request = (dispatch: any, actions: any, { jwtToken = getJwt() } = {}) => async (
    url: string,
    options: any,
) => {
    try {
        const response = await fetch(url, mergeOptions(options, jwtToken));
        if (!response.ok) throw new Error('Request failed');
        const data = await response.json();
        const headers = response.headers;
        dispatch(actions.success({ data, headers }));
    } catch (err) {
        console.log(err);
        dispatch(actions.failure(err));
    }
};

export default request;
