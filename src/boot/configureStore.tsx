import { compose, createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';
import reducers from '@state/_redux/reducers';
import middlewares from '@state/_redux/middlewares';

export type IStore = any;

const configureStore = (): Store<IStore> => {
    const _WINDOW = window as any;
    const composeEnhancers =
        _WINDOW.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(reducers, composeEnhancers(middlewares)) as Store<any>;
};

const store = configureStore();
export const persistor = persistStore(store);

export default store;
