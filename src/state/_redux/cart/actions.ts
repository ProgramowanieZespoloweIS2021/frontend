import { ICart, ICartItem } from '@@types/models/Cart';
import { createAsyncAction } from 'typesafe-actions';

export const createEmptyCart = createAsyncAction(
    'CREATE_EMPTY_CART_REQUEST',
    'CREATE_EMPTY_CART_SUCCESS',
    'CREATE_EMPTY_CART_FAILURE',
)<null, number, string>();

export const getCart = createAsyncAction(
    'GET_CART_REQUEST',
    'GET_CART_SUCCESS',
    'GET_CART_FAILURE',
)<null, ICart, string>();

export const addItemToCart = createAsyncAction(
    'ADD_ITEM_TO_CART_REQUEST',
    'ADD_ITEM_TO_CART_SUCCESS',
    'ADD_ITEM_TO_CART_FAILURE',
)<null, ICartItem, string>();

export const deleteItemFromCart = createAsyncAction(
    'DELETE_ITEM_FROM_CART_REQUEST',
    'DELETE_ITEM_FROM_CART_SUCCESS',
    'DELETE_ITEM_FROM_CART_FAILURE',
)<null, ICartItem, string>();
