import { Action } from 'redux';
import { createReducer } from 'typesafe-actions';
import { loginUser, getUser, logoutUser } from './actions';
import { UserModule, initialState } from './module';

const userReducer = createReducer<UserModule, Action>(initialState)
    .handleAction(loginUser.success, (state: UserModule) => ({
        ...state,
        authorized: true,
    }))
    .handleAction(getUser.success, (state: UserModule) => ({
        ...state,
        authorized: true,
    }))
    .handleAction(logoutUser.success, (state: UserModule) => ({
        ...state,
        authorized: false,
    }))
    .handleAction(getUser.success, (state: UserModule, { payload }) => ({
        ...state,
        authorized: true,
        id: payload.data.id,
        email: payload.data.email,
    }))
    .handleAction(getUser.failure, () => ({
        ...initialState,
        authorized: false,
    }));

export default userReducer;
