import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';
import { incrementSaga } from './app.sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [logger, sagaMiddleware];
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(incrementSaga);

export default store;
