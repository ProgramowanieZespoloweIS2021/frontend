import { applyMiddleware } from 'redux';

import { createUserMiddleware, loginMiddleware } from '@state/_redux/user/middleware';

const middlewares = [
    createUserMiddleware,
    loginMiddleware,
];

export default applyMiddleware(...middlewares);
