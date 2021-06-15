import { Middleware, AnyAction, Dispatch } from 'redux';
import { getType } from 'typesafe-actions';
import axios from 'axios';

import { TState } from '../../../boot/configureStore';
import {
    createUser,
    getUser,
    loginUser,
    logoutUser,
} from '@state/_redux/user/actions';
import { setJwt } from '@utils/jwt';
import { toast } from 'react-toastify';
import { API } from '@utils/api';
import paths from '@shared/paths';
import { history } from '@utils/history';
import { clearStorage } from '@utils/storage';

const AUTH_SERVICE_URL =
    process.env.REACT_APP_AUTH_SERVICE_URL || 'http://localhost:8084';

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
        toast.success('Successfully registered!');
        history.push(paths.login);
    } catch (err) {
        console.log(err);
        dispatch(createUser.failure(err));
        toast.error('Error occurred while creating account');
        return false;
    }
};

const getUserRequest = async (action: AnyAction, dispatch: Dispatch) => {
    try {
        const response = await API.getAuth(AUTH_SERVICE_URL, '/auth/user');
        dispatch(getUser.success(response));
        return true;
    } catch (err) {
        dispatch(getUser.failure(err));
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
        history.push(paths.home);
        toast.success('Successfully logged in!');
        return true;
    } catch (err) {
        dispatch(loginUser.failure(err));
        toast.error('Wrong credentials');
        return false;
    }
};

const logoutRequest = async (action: AnyAction, dispatch: Dispatch) => {
    try {
        const response = await API.getAuth(AUTH_SERVICE_URL, '/auth/logout');
        dispatch(logoutUser.success(response));
        history.push(paths.home);
        clearStorage();
        return true;
    } catch (err) {
        dispatch(logoutUser.failure(err));
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

export const logoutUserMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action) => {
    if (action.type === getType(logoutUser.request)) {
        await logoutRequest(action, dispatch);
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

export const getUserMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getUser.request)) {
        await getUserRequest(action, dispatch);
    }
    if (action.type === getType(getUser.failure)) {
        history.push(paths.home);
    }
    return next(action);
};
