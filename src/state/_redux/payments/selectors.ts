import { createSelector } from 'reselect';
import { DefaultRootState } from 'react-redux';
import { TPaymentsReducer } from './reducers';

const selectPaymentsModule = createSelector(
    ({ payments }: DefaultRootState): TPaymentsReducer => payments,
    (payments) => payments,
);

export const selectPayments = createSelector(
    selectPaymentsModule,
    (paymentsReducer) => paymentsReducer.payments,
);
