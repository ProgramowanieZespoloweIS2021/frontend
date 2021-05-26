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
} from '@state/_redux/offers/middleware';
import {
    addItemToCartMiddleware,
    createEmptyCartMiddleware,
    getCartMiddleware,
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
];

export default applyMiddleware(...middlewares);
