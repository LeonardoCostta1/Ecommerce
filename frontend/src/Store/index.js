import { createStore,applyMiddleware,combineReducers } from 'redux';

import createSagaMiddleware from 'redux-saga';

import cart from './Reducer';

import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    cart
}),applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas)

export default store;