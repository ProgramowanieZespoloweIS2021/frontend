import { API } from '@utils/api';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { TState } from 'src/boot/configureStore';
import { getType } from 'typesafe-actions';
import { createEmptyCart, getCart } from './actions';
export {};

const serviceUrl = 'http://localhost:8084';

export const createEmptyCartRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        const response = await API.getAuth(serviceUrl, '/carts');
        dispatch(createEmptyCart.success(response.data));
    } catch (err) {
        dispatch(createEmptyCart.failure(err));
    }
};

export const getCartRequest = async (action: AnyAction, dispatch: Dispatch) => {
    try {
        const cartId = 1;
        const response = await API.getAuth(serviceUrl, `/carts/${cartId}`);
        dispatch(getCart.success(response.data));
    } catch (err) {
        dispatch(getCart.failure(err));
    }
};

export const createEmptyCartMiddleware: Middleware<{}, TState> = ({
    dispatch,
}) => (next) => async (action: AnyAction) => {
    if (action.type === getType(createEmptyCart.request)) {
        await createEmptyCartRequest(action, dispatch);
    }
    return next(action);
};

export const getCartMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getCart.request)) {
        await getCartRequest(action, dispatch);
    }
    return next(action);
};
