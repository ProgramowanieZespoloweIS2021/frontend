import { Action } from 'redux';
import { createReducer } from 'typesafe-actions';
import {loginUser, getUser, logoutUser} from './actions';
import { UserModule, initialState } from './module';

const userReducer = createReducer<UserModule, Action>(initialState)
    .handleAction(loginUser.success, (state: UserModule, action: Action) => ({
        ...state,
        authorized: true,
    }))
    .handleAction(getUser.success, (state: UserModule, action: Action) => ({
        ...state,
        authorized: true,
    }))
    .handleAction(logoutUser.success, (state: UserModule, action: Action) => ({
        ...state,
        authorized: false,
    }))
    .handleAction(getUser.failure, (state: UserModule, action: Action) => ({
        ...state,
        authorized: false,
    }));

export default userReducer;
