import { applyMiddleware } from 'redux';

import {
    createUserMiddleware,
    logoutUserMiddleware,
    loginMiddleware,
    getUserMiddleware,
} from '@state/_redux/user/middleware';
import {
    getAllTagsMiddleware,
    createOfferMiddleware,
    getOffersMiddleware,
    getOfferDetailsMiddleware,
    getMyOffersMiddleware,
    deleteOfferMiddleware,
    updateOfferMiddleware,
} from '@state/_redux/offers/middleware';
import {
    addItemToCartMiddleware,
    createEmptyCartMiddleware,
    deleteItemFromCartMiddleware,
    getCartMiddleware,
    submitCartMiddleware,
} from '@state/_redux/cart/middleware';

import { getOrdersMiddleware } from '@state/_redux/orders/middleware';

const middlewares = [
    createUserMiddleware,
    loginMiddleware,
    getAllTagsMiddleware,
    createOfferMiddleware,
    getOffersMiddleware,
    getUserMiddleware,
    logoutUserMiddleware,
    createEmptyCartMiddleware,
    getCartMiddleware,
    addItemToCartMiddleware,
    getOfferDetailsMiddleware,
    deleteItemFromCartMiddleware,
    submitCartMiddleware,
    getMyOffersMiddleware,
    deleteOfferMiddleware,
    updateOfferMiddleware,
    getOrdersMiddleware,
];

export default applyMiddleware(...middlewares);
