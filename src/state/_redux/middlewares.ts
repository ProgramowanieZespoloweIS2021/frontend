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
    createCartMiddleware,
    deleteItemFromCartMiddleware,
    getCartMiddleware,
    submitCartMiddleware,
    clearCartMiddleware,
} from '@state/_redux/cart/middleware';
import {
    createChatMiddleware,
    getContactsMiddleware,
    getMessagesMiddleware,
} from '@state/_redux/chat/middleware';

import { getOrdersMiddleware } from '@state/_redux/orders/middleware';

const middlewares = [
    createUserMiddleware,
    loginMiddleware,
    getAllTagsMiddleware,
    createOfferMiddleware,
    getOffersMiddleware,
    getUserMiddleware,
    logoutUserMiddleware,
    createCartMiddleware,
    getCartMiddleware,
    addItemToCartMiddleware,
    getOfferDetailsMiddleware,
    deleteItemFromCartMiddleware,
    submitCartMiddleware,
    clearCartMiddleware,
    getMyOffersMiddleware,
    deleteOfferMiddleware,
    updateOfferMiddleware,
    getOrdersMiddleware,
    createChatMiddleware,
    getContactsMiddleware,
    getMessagesMiddleware,
];

export default applyMiddleware(...middlewares);
