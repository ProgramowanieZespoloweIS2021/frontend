import { IPayment } from '@@types/models/Payment';
import { createAsyncAction } from 'typesafe-actions';

export const getPayments = createAsyncAction(
    'GET_PAYMENTS_REQUEST',
    'GET_PAYMENTS_SUCCESS',
    'GET_PAYMENTS_FAILURE',
)<number, any, string>();
