import { Middleware } from 'redux';
import { getType } from 'typesafe-actions';
import axios from 'axios';

import { IStore } from '../../../boot/configureStore';
import { createUser, loginUser } from '@state/_redux/user/actions';
import { setJwt } from '@utils/jwt';

const creatUserRequest = async (action: any, dispatch: any) => {
    const { email, firstName, lastName, password } = action.payload;
    try {
        const response = await axios.post('http://localhost:8084/auth/user', {
            email,
            password,
            firstName,
            surname: lastName,
        });
        dispatch(createUser.success(response));
        return true;
    } catch (err) {
        dispatch(createUser.failure(err));
        return false;
    }
};

const loginRequest = async (action: any, dispatch: any) => {
    const { email, password } = action.payload;
    try {
        const response = await axios.post('http://localhost:8084/auth/login', {
            email,
            password,
        });
        dispatch(loginUser.success(response));
        return true;
    } catch (err) {
        dispatch(loginUser.failure(err));
        return false;
    }
};

const saveAuthToken = (action: any) => {
    const tokenRaw = action.payload.headers.authorization;
    const [, token] = tokenRaw.split(' ');
    setJwt(token);
};

export const createUserMiddleware: Middleware<{}, IStore> = ({ dispatch }) => (
    next,
) => async (action) => {
    if (action.type === getType(createUser.request)) {
        await creatUserRequest(action, dispatch);
    }
    return next(action);
};

export const loginMiddleware: Middleware<{}, IStore> = ({ dispatch }) => (
    next,
) => async (action) => {
    if (action.type === getType(loginUser.request)) {
        await loginRequest(action, dispatch);
    } else if (action.type === getType(loginUser.success)) {
        saveAuthToken(action);
    }
    return next(action);
};
