import { applyMiddleware } from 'redux';

import {
    createUserMiddleware,
    loginMiddleware,
    getUserMiddleware,
} from '@state/_redux/user/middleware';
import {
    getAllTagsMiddleware,
    createOfferMiddleware,
} from '@state/_redux/offers/middleware';

const middlewares = [
    createUserMiddleware,
    loginMiddleware,
    getAllTagsMiddleware,
    createOfferMiddleware,
    getUserMiddleware,
];

export default applyMiddleware(...middlewares);
