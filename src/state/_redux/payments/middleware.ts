import { API } from '@utils/api';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { TState } from 'src/boot/configureStore';
import { getType } from 'typesafe-actions';
import { getPayments } from './actions';
import { toast } from 'react-toastify';
import { IPayment } from '@@types/models/Payment';

const PAYMENT_SERVICE_URL =
    process.env.REACT_APP_PAYMENT_SERVICE_URL || 'http://localhost:8085';

export const getPaymentsRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const { userId } = action.payload;
    try {
        const params = {
            user_id: userId,
        };
        const payments = await API.postAuth(
            PAYMENT_SERVICE_URL,
            'payments',
            params,
        );
        dispatch(getPayments.success(payments));
    } catch (e) {
        dispatch(getPayments.failure(e));
    }
};

export const getPaymentsMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(getPayments.request)) {
        await getPaymentsRequest(action, dispatch);
    }
    return next(action);
};
