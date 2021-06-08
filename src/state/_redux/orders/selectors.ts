import { createSelector } from 'reselect';
import { DefaultRootState } from 'react-redux';
import { TOrderReducer } from '@state/_redux/orders/reducers';

const selectOrdersModule = createSelector(
    ({ orders }: DefaultRootState): TOrderReducer => orders,
    (orders) => orders,
);

export const selectOrders = createSelector(
    selectOrdersModule,
    (ordersReducer) => ordersReducer.orders,
);
