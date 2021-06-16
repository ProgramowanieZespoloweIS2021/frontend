import { IPayment } from '@@types/models/Payment';
import { Action, createReducer } from 'typesafe-actions';
import { getPayments } from './actions';

export type TPaymentsReducer = {
    payments: IPayment[];
};

const initialState: TPaymentsReducer = {
    payments: [],
};

export const PaymentsReducer = createReducer<TPaymentsReducer, Action>(
    initialState,
).handleAction(getPayments.success, (state, { payload }) => ({
    ...state,
    payments: payload,
}));
