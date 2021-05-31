import { createReducer } from 'typesafe-actions';
import { getOrders } from '@state/_redux/orders/actions';
import { IOrder } from '@@types/models/Order';

export type TOrderReducer = {
    orders: IOrder[];
};

const initialState: TOrderReducer = {
    orders: [],
};

export const OrdersReducer = createReducer(initialState).handleAction(
    getOrders.success,
    (state, { payload }) => ({
        ...state,
        orders: payload,
    }),
);
