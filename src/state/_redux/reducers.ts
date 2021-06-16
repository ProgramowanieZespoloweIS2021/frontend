import { combineReducers } from 'redux';
import { OffersReducer } from '@state/_redux/offers/reducers';
import userReducer from './user/reducer';
import { cartReducer } from './cart/reducers';
import { OrdersReducer } from '@state/_redux/orders/reducers';
import { chatReducer } from './chat/reducer';
import { PaymentsReducer } from './payments/reducers';

export default combineReducers({
    offers: OffersReducer,
    orders: OrdersReducer,
    user: userReducer,
    cart: cartReducer,
    chat: chatReducer,
    payments: PaymentsReducer,
});
