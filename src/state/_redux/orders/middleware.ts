import { AnyAction, Dispatch, Middleware } from 'redux';
import { API } from '@utils/api';
import { TState } from '../../../boot/configureStore';
import { getType } from 'typesafe-actions';
import { getOrders, updateOrderState } from '@state/_redux/orders/actions';
import { toast } from 'react-toastify';

const ORDERS_SERVICE_URL =
    process.env.REACT_APP_ORDERS_SERVICE_URL || 'http://localhost:8081';

export const getOrdersRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    try {
        const response = await API.getAuth(ORDERS_SERVICE_URL, '/orders');
        dispatch(getOrders.success(response.data));
    } catch (err) {
        dispatch(getOrders.failure(err));
    }
};

export const updateOrderStateRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const data = action.payload;
    try {
        const response = await API.postAuth(
            ORDERS_SERVICE_URL,
            `orders/${data.id}/state`,
            {
                value: data.status,
            },
        );
        dispatch(updateOrderState.success(response.data));
        toast.success('Order status has been updated.');
        return true;
    } catch (err) {
        dispatch(updateOrderState.failure(err));
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

export const updateOrderStateMiddleware: Middleware<{}, TState> = ({
    dispatch,
}) => (next) => async (action: AnyAction) => {
    if (action.type === getType(updateOrderState.request)) {
        const isUpdatedSuccessfully = await updateOrderStateRequest(
            action,
            dispatch,
        );
        if (isUpdatedSuccessfully) {
            await getOrdersRequest(action, dispatch);
        }
    }
    return next(action);
};
