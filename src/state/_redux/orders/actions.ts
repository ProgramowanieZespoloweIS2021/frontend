import { createAsyncAction } from 'typesafe-actions';
import { IOrder } from '@@types/models/Order';

export const getOrders = createAsyncAction(
    'GET_ORDERS_REQUEST',
    'GET_ORDERS_SUCCESS',
    'GET_ORDERS_FAILURE',
)<null, IOrder[], string>();

export const updateOrder = createAsyncAction(
    'UPDATE_ORDER_REQUEST',
    'UPDATE_ORDER_SUCCESS',
    'UPDATE_ORDER_FAILURE',
)<null, IOrder, string>();
