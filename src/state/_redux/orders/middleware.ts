import { AnyAction, Dispatch, Middleware } from 'redux';
import { API } from '@utils/api';
import { TState } from '../../../boot/configureStore';
import { getType } from 'typesafe-actions';
import { getOrders } from '@state/_redux/orders/actions';

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

export const getOrdersMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getOrders.request)) {
        await getOrdersRequest(action, dispatch);
    }
    return next(action);
};
