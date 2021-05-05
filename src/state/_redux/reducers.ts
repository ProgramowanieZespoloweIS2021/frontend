import { combineReducers } from 'redux';
import layoutReducer from './layout/reducer';
import userReducer from './user/reducer';

export default combineReducers({
    layout: layoutReducer,
    user: userReducer,
});
