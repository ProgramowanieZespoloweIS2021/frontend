import { ICart, ICartItemDetails } from '@@types/models/Cart';
import StateManager from 'react-select';
import { Action, createReducer } from 'typesafe-actions';
import { addItemToCart, createEmptyCart, getCart } from './actions';

export type TCartReducer = {
    cartId: number;
    cart: ICart;
};

const initialState: TCartReducer = {
    cartId: 0,
    cart: {
        id: 0,
        totalPrice: 0,
        items: [],
    },
};

export const cartReducer = createReducer<TCartReducer, Action>(initialState)
    .handleAction(createEmptyCart.success, (state, { payload }) => ({
        ...state,
        cartId: payload,
    }))
    .handleAction(getCart.success, (state, { payload }) => ({
        ...state,
        cart: payload,
    }))
    .handleAction(addItemToCart.success, (state) => ({
        ...state,
    }));
