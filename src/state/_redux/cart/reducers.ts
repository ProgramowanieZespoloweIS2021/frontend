import { ICart } from '@@types/models/Cart';
import { Action, createReducer } from 'typesafe-actions';
import {
    addItemToCart,
    createCart,
    deleteItemFromCart,
    getCart,
    clearCart,
} from './actions';

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
    .handleAction(createCart.success, (state, { payload }) => ({
        ...state,
        cartId: payload,
    }))
    .handleAction(getCart.success, (state, { payload }) => ({
        ...state,
        cart: payload,
    }))
    .handleAction(addItemToCart.success, (state) => ({
        ...state,
    }))
    .handleAction(deleteItemFromCart.success, (state, { payload }) => ({
        ...state,
        cart: {
            ...state.cart,
            items: [...state.cart.items].filter((item) => item.id !== payload),
        },
    }))
    .handleAction(clearCart.success, (state) => initialState);
