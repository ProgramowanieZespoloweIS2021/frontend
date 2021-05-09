import { applyMiddleware } from 'redux';

import {
    createUserMiddleware,
    loginMiddleware,
} from '@state/_redux/user/middleware';
import {
    getAllTagsMiddleware,
    createOfferMiddleware,
    getOffersMiddleware,
} from '@state/_redux/offers/middleware';

const middlewares = [
    createUserMiddleware,
    loginMiddleware,
    getAllTagsMiddleware,
    createOfferMiddleware,
    getOffersMiddleware,
];

export default applyMiddleware(...middlewares);
