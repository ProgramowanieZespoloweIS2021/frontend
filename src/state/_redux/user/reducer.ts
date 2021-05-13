import { Action } from 'redux';
import { createReducer } from 'typesafe-actions';
import { loginUser, getUser } from './actions';
import { UserModule, initialState } from './module';

const userReducer = createReducer<UserModule, Action>(initialState)
    .handleAction(loginUser.success, (state: UserModule, action: Action) => ({
        ...state,
        authorized: true,
    }))
    .handleAction(getUser.success, (state: UserModule, action: Action) => ({
        ...state,
        authorized: true,
    }));

export default userReducer;
