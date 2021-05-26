import { createSelector } from 'reselect';
import { DefaultRootState } from 'react-redux';
import { TCartReducer } from './reducers';

const selectCartModule = createSelector(
    ({ cart }: DefaultRootState): TCartReducer => cart,
    (cart) => cart,
);

export const selectItems = createSelector(
    selectCartModule,
    (cartReducer) => cartReducer.cart.items,
);

export const selectCart = createSelector(
    selectCartModule,
    (cartReducer) => cartReducer.cart,
);

export const selectCartId = createSelector(
    selectCartModule,
    (cartReducer) => cartReducer.cartId,
);
