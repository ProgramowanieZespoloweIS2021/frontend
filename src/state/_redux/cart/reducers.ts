import { Action, createReducer } from 'typesafe-actions';
import { createEmptyCart } from './actions';

export type TCartReducer = {
    cartId: number | null;
    offers: [];
};

const initialState: TCartReducer = {
    cartId: null,
    offers: [],
};

export const cartReducer = createReducer<TCartReducer, Action>(
    initialState,
).handleAction(createEmptyCart.success, (state, { payload }) => ({
    ...state,
    cartId: payload,
}));
