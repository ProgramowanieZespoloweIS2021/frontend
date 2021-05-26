import { ICartItem, ICartItemDetails } from '@@types/models/Cart';
import { API } from '@utils/api';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { TState } from 'src/boot/configureStore';
import { getType } from 'typesafe-actions';
import { addItemToCart, createEmptyCart, getCart } from './actions';
import { toast } from 'react-toastify';
export {};

const serviceUrl = 'http://localhost:8082';
// TODO: get card id from reducer
const cartId = 1;

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
        const response = await API.getAuth(serviceUrl, `/carts/${cartId}`);
        dispatch(getCart.success(response.data));
    } catch (err) {
        dispatch(getCart.failure(err));
    }
};

export const addItemToCartRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const item: ICartItem = action.payload;
    try {
        const response = await API.postAuth(
            serviceUrl,
            `carts/${cartId}/items`,
            item,
        );
        toast.success(response.data);
        dispatch(addItemToCart.success(null));
    } catch (err) {
        dispatch(addItemToCart.failure(err));
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

export const addItemToCartMiddleware: Middleware<{}, TState> = ({
    dispatch,
}) => (next) => async (action: AnyAction) => {
    if (action.type === getType(addItemToCart.request)) {
        await addItemToCartRequest(action, dispatch);
    }
    return next(action);
};
