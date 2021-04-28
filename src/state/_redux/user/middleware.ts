import { Middleware } from 'redux';
import { getType } from 'typesafe-actions';
import { IStore } from '../../../boot/configureStore';
import { createUser, loginUser } from '@state/_redux/user/actions';
import { setJwt } from '@utils/jwt';

import middlewareRequest from '@utils/middlewareRequest';

const creatUserRequest = async (apiRequest: any, action: any) => {
    const { email, firstName, lastName, password } = action.payload;
    apiRequest('http://localhost:8084/auth/user', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            firstName,
            surname: lastName,
        }),
    });
};

const loginRequest = async (apiRequest: any, action: any) => {
    const { email, password } = action.payload;
    apiRequest('http://localhost:8084/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
        }),
    });
};

export const createUserMiddleware: Middleware<{}, IStore> = ({ dispatch }) => (
    next,
) => async (action) => {
    const apiRequest = middlewareRequest(dispatch, createUser);
    if (action.type === getType(createUser.request)) {
        creatUserRequest(apiRequest, action);
    } else if (action.type === getType(createUser.success)) {
        // TODO: redirect to login (?)
    }
    return next(action);
};

export const loginMiddleware: Middleware<{}, IStore> = ({ dispatch }) => (
    next,
) => async (action) => {
    const apiRequest = middlewareRequest(dispatch, loginUser);
    if (action.type === getType(loginUser.request)) {
        loginRequest(apiRequest, action);
    } else if (action.type === getType(loginUser.success)) {
        const tokenRaw = action.payload.headers.get('Authorization');
        const [, token] = tokenRaw.split(' ');
        setJwt(token);
    }
    return next(action);
};
