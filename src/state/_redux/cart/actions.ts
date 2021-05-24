import { createAsyncAction } from 'typesafe-actions';

export const createEmptyCart = createAsyncAction(
    'CREATE_EMPTY_CART_REQUEST',
    'CREATE_EMPTY_CART_SUCCESS',
    'CREATE_EMPTY_CART_FAILURE',
)<null, number, string>();

export const addOfferToCart = createAsyncAction(
    'ADD_OFFER_TO_CART_REQUEST',
    'ADD_OFFER_TO_CART_SUCCESS',
    'ADD_OFFER_TO_CART_FAILURE',
)();

export const deleteOfferFromCart = createAsyncAction(
    'DELETE_OFFER_FROM_CART_REQUEST',
    'DELETE_OFFER_FROM_CART_SUCCESS',
    'DELETE_OFFER_FROM_CART_FAILURE',
)();
