import { compose, createStore, Store } from 'redux';
import reducers from '@state/_redux/reducers';
import { persistStore } from 'redux-persist';

const configureStore = (): Store<any> => {
    const _WINDOW = window as any;
    const composeEnhancers =
        _WINDOW.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(reducers, composeEnhancers()) as Store<any>;
};

const store = configureStore();
export const persistor = persistStore(store);

export default store;
