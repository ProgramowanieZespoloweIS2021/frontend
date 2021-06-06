import { AnyAction, Dispatch, Middleware } from 'redux';
import { API } from '@utils/api';
import { TState } from '../../../boot/configureStore';
import { getType } from 'typesafe-actions';
import { getOrders, updateOrder } from '@state/_redux/orders/actions';

const ORDERS_SERVICE_URL =
    process.env.REACT_APP_ORDERS_SERVICE_URL || 'http://localhost:8081';

export const getOrdersRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        const response = await API.get(ORDERS_SERVICE_URL, 'orders');
        dispatch(getOrders.success(response.data));
    } catch (err) {
        dispatch(getOrders.failure(err));
    }
};

export const updateOrderRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const { id, state } = action.payload;
    try {
        const response = await API.postAuth(
            ORDERS_SERVICE_URL,
            `orders/${id}/${state}`,
        );
        dispatch(updateOrder.success(response.data));
    } catch (err) {
        dispatch(updateOrder.failure(err));
    }
};

export const getOrdersMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getOrders.request)) {
        await getOrdersRequest(action, dispatch);
    }
    return next(action);
};

export const updateOrderMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(updateOrder.request)) {
        await updateOrderRequest(action, dispatch);
    }
    return next(action);
};
