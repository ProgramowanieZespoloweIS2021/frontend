import { Middleware, AnyAction, Dispatch } from 'redux';
import { getType } from 'typesafe-actions';
import axios from 'axios';

import { TState } from '../../../boot/configureStore';
import { createUser, loginUser } from '@state/_redux/user/actions';
import { setJwt } from '@utils/jwt';

const AUTH_SERVICE_URL = process.env.REACT_APP_AUTH_SERVICE_URL;

const creatUserRequest = async (action: AnyAction, dispatch: Dispatch) => {
    const { email, firstName, lastName, password } = action.payload;
    try {
        const response = await axios.post(`${AUTH_SERVICE_URL}/auth/user`, {
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

const loginRequest = async (action: AnyAction, dispatch: Dispatch) => {
    const { email, password } = action.payload;
    try {
        const response = await axios.post(`${AUTH_SERVICE_URL}/auth/login`, {
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

const saveAuthToken = (action: AnyAction) => {
    const tokenRaw = action.payload.headers.authorization;
    const [, token] = tokenRaw.split(' ');
    setJwt(token);
};

export const createUserMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action) => {
    if (action.type === getType(createUser.request)) {
        await creatUserRequest(action, dispatch);
    }
    return next(action);
};

export const loginMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(loginUser.request)) {
        await loginRequest(action, dispatch);
    } else if (action.type === getType(loginUser.success)) {
        saveAuthToken(action);
    }
    return next(action);
};
