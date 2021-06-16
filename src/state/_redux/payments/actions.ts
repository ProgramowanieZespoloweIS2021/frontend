import { IPayment, IPaymentRequest } from '@@types/models/Payment';
import { createAsyncAction } from 'typesafe-actions';

export const getPayments = createAsyncAction(
    'GET_PAYMENTS_REQUEST',
    'GET_PAYMENTS_SUCCESS',
    'GET_PAYMENTS_FAILURE',
)<number, any, string>();

export const makePayment = createAsyncAction(
    'MAKE_PAYMENT_REQUEST',
    'MAKE_PAYMENT_SUCCESS',
    'MAKE_PAYMENT_FAILURE',
)<IPaymentRequest, null, string>();
