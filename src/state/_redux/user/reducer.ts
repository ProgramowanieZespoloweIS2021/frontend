import { createReducer } from 'typesafe-actions';
import { User } from './types';
import { loginUser } from './actions';

type Action = any;

const initialState = {
    authorized: false,
};
const userReducer = createReducer<User, Action>(
    initialState as User,
).handleAction(loginUser.success, (state: User, action: Action) => ({
    ...state,
    authorized: true,
}));

export default userReducer;
