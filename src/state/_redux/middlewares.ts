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
} from '@state/_redux/offers/middleware';
import {
    addItemToCartMiddleware,
    createEmptyCartMiddleware,
    deleteItemFromCartMiddleware,
    getCartMiddleware,
    submitCartMiddleware,
} from '@state/_redux/cart/middleware';
import {
    createChatMiddleware,
    getContactsMiddleware,
    getMessagesMiddleware,
} from '@state/_redux/chat/middleware';

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
    createChatMiddleware,
    getContactsMiddleware,
    getMessagesMiddleware,
];

export default applyMiddleware(...middlewares);
