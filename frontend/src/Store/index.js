import { createStore,applyMiddleware,combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';

import cart from './Reducer';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist:['products','detail']
  }

const bag = persistReducer(persistConfig, cart)


const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    bag
}),applyMiddleware(sagaMiddleware));

const persistor = persistStore(store)

sagaMiddleware.run(sagas)

export {store,persistor};