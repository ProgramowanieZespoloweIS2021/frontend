import { combineReducers } from 'redux';
import { OffersReducer } from '@state/_redux/offers/reducers';
import userReducer from './user/reducer';
import { cartReducer } from './cart/reducers';

export default combineReducers({
    offers: OffersReducer,
    user: userReducer,
    cart: cartReducer,
});
