import { ICart, ICartItemRequest, ICartSubmission } from '@@types/models/Cart';
import { createAsyncAction } from 'typesafe-actions';

export const createCart = createAsyncAction(
    'CREATE_CART_REQUEST',
    'CREATE_CART_SUCCESS',
    'CREATE_CART_FAILURE',
)<null, number, string>();

export const getCart = createAsyncAction(
    'GET_CART_REQUEST',
    'GET_CART_SUCCESS',
    'GET_CART_FAILURE',
)<number, ICart, string>();

export const addItemToCart = createAsyncAction(
    'ADD_ITEM_TO_CART_REQUEST',
    'ADD_ITEM_TO_CART_SUCCESS',
    'ADD_ITEM_TO_CART_FAILURE',
)<ICartItemRequest, null, string>();

export const deleteItemFromCart = createAsyncAction(
    'DELETE_ITEM_FROM_CART_REQUEST',
    'DELETE_ITEM_FROM_CART_SUCCESS',
    'DELETE_ITEM_FROM_CART_FAILURE',
)<{ cartId: number; itemId: number }, number, string>();

export const submitCart = createAsyncAction(
    'SUBMIT_CART_REQUEST',
    'SUBMIT_CART_SUCCESS',
    'SUBMIT_CART_FAILURE',
)<ICartSubmission, null, string>();
