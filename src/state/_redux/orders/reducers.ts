import { createReducer } from 'typesafe-actions';
import { getBoughtOrders, getOrders } from '@state/_redux/orders/actions';
import { IOrder } from '@@types/models/Order';

export type TOrderReducer = {
    orders: IOrder[];
    boughtOrders: IOrder[];
};

const initialState: TOrderReducer = {
    orders: [],
    boughtOrders: [],
};

export const OrdersReducer = createReducer(initialState)
    .handleAction(getOrders.success, (state, { payload }) => ({
        ...state,
        orders: payload.orders,
    }))
    .handleAction(getBoughtOrders.success, (state, { payload }) => ({
        ...state,
        boughtOrders: payload.orders,
    }));
