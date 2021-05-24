import { ICart } from '@@types/models/Cart';
import { Action, createReducer } from 'typesafe-actions';
import { createEmptyCart, getCart } from './actions';

export type TCartReducer = {
    cartId: number | null;
    cart: ICart | null;
};

const initialState: TCartReducer = {
    cartId: null,
    cart: null,
};

export const cartReducer = createReducer<TCartReducer, Action>(initialState)
    .handleAction(createEmptyCart.success, (state, { payload }) => ({
        ...state,
        cartId: payload,
    }))
    .handleAction(getCart.success, (state, { payload }) => ({
        ...state,
        cart: payload,
    }));
