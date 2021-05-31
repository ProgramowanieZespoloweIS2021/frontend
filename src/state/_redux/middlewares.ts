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
];

export default applyMiddleware(...middlewares);
