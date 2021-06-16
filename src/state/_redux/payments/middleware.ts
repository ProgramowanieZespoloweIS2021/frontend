import { API } from '@utils/api';
import { AnyAction, Dispatch, Middleware } from 'redux';
import { TState } from 'src/boot/configureStore';
import { getType } from 'typesafe-actions';
import { getPayments, makePayment } from './actions';
import { toast } from 'react-toastify';
import { IPayment, IPaymentRequest } from '@@types/models/Payment';

const PAYMENT_SERVICE_URL =
    process.env.REACT_APP_PAYMENT_SERVICE_URL || 'http://localhost:8085';

export const getPaymentsRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const id = action.payload;
    try {
        const params = {
            user_id: id,
        };
        const response = await API.getAuth(
            PAYMENT_SERVICE_URL,
            '/payments',
            params,
        );
        dispatch(getPayments.success(response.data));
    } catch (e) {
        dispatch(getPayments.failure(e));
    }
};

export const makePaymentRequest = async (
    action: AnyAction,
    dispatch: Dispatch,
) => {
    const paymentRequest: IPaymentRequest = action.payload;
    const {
        name,
        surname,
        email,
        cardNumber: cartNumber,
        codeCvv,
        expirationDate,
    } = paymentRequest;
    try {
        const response = await API.postAuth(
            PAYMENT_SERVICE_URL,
            `payments/${paymentRequest.paymentId}/pay`,
            { name, surname, email, cartNumber, codeCvv, expirationDate },
        );
        toast.success(response.data.message);
        dispatch(getPayments.success(null));
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

export const makePaymentMiddleware: Middleware<{}, TState> = ({ dispatch }) => (
    next,
) => async (action: AnyAction) => {
    if (action.type === getType(makePayment.request)) {
        await makePaymentRequest(action, dispatch);
    }
    return next(action);
};
