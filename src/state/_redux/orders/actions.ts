import { createAsyncAction } from 'typesafe-actions';
import { IOrder, IOrderUpdateRequestBody } from '@@types/models/Order';

export const getOrders = createAsyncAction(
    'GET_ORDERS_REQUEST',
    'GET_ORDERS_SUCCESS',
    'GET_ORDERS_FAILURE',
)<null, { orders: IOrder[] }, string>();

export const updateOrderState = createAsyncAction(
    'UPDATE_ORDER_STATE_REQUEST',
    'UPDATE_ORDER_STATE_SUCCESS',
    'UPDATE_ORDER_STATE_FAILURE',
)<IOrderUpdateRequestBody, IOrderUpdateRequestBody, string>();
