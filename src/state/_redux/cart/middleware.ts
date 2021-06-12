import { API } from '@utils/api';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { TState } from 'src/boot/configureStore';
import { getType } from 'typesafe-actions';
import {
    addItemToCart,
    createCart,
    deleteItemFromCart,
    getCart,
    submitCart,
} from './actions';
import { toast } from 'react-toastify';
import { ICartItemRequest, ICartSubmission } from '@@types/models/Cart';
import { getCartId, setCartId } from '@utils/storage';
export {};

const CART_SERVICE_URL =
    process.env.REACT_APP_CART_SERVICE_URL || 'http://localhost:8082';

export const createCartRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        const storageCardId = getCartId();
        if (storageCardId) {
            dispatch(createCart.success(parseInt(storageCardId)));
            return;
        }
        const response = await API.getAuth(CART_SERVICE_URL, '/carts');
        dispatch(createCart.success(response.data));
    } catch (err) {
        dispatch(createCart.failure(err));
    }
};

export const getCartRequest = async (action: AnyAction, dispatch: Dispatch) => {
    const cartId: number = action.payload;
    try {
        const response = await API.getAuth(
            CART_SERVICE_URL,
            `/carts/${cartId}`,
        );
        dispatch(getCart.success(response.data));
    } catch (err) {
        dispatch(getCart.failure(err));
    }
};

export const addItemToCartRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const { cartId, cartItem }: ICartItemRequest = action.payload;
    try {
        const response = await API.postAuth(
            CART_SERVICE_URL,
            `carts/${cartId}/items`,
            cartItem,
        );
        toast.success(response.data);
        dispatch(addItemToCart.success(null));
    } catch (err) {
        dispatch(addItemToCart.failure(err));
    }
};

export const deleteItemFromCartRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const { cartId, itemId } = action.payload;
    try {
        await API.deleteAuth(
            CART_SERVICE_URL,
            `/carts/${cartId}/items/${itemId}`,
        );
        toast.success('Item was deleted from cart!');
        dispatch(deleteItemFromCart.success(itemId));
    } catch (err) {
        dispatch(deleteItemFromCart.failure(err));
    }
};

export const submitCartRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const cartSubmission: ICartSubmission = action.payload;
    try {
        await API.postAuth(
            CART_SERVICE_URL,
            'carts/submission',
            cartSubmission,
        );
        toast.success('Cart was submitted');
        dispatch(submitCart.success(null));
    } catch (err) {
        dispatch(submitCart.failure(err));
    }
};

const saveCardIdStorage = (action: AnyAction) => {
    const cardId = action.payload;
    setCartId(cardId);
};

export const createCartMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(createCart.request)) {
        await createCartRequest(action, dispatch);
    } else if (action.type === getType(createCart.success)) {
        saveCardIdStorage(action);
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

export const deleteItemFromCartMiddleware: Middleware<{}, TState> = ({
    dispatch,
}) => (next) => async (action: AnyAction) => {
    if (action.type === getType(deleteItemFromCart.request)) {
        await deleteItemFromCartRequest(action, dispatch);
    }
    return next(action);
};

export const submitCartMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(submitCart.request)) {
        await submitCartRequest(action, dispatch);
    }
    return next(action);
};
