import { applyMiddleware } from 'redux';

import { createUserMiddleware } from '@state/_redux/user/middleware';

export default applyMiddleware(createUserMiddleware);
