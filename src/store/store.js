/*
 * File: store.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:19:34 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 1:41:16 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import createSageMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const sagaMiddleware = createSageMiddleware();

// const loggerMiddleware = (store) => (next) => (action) => {
//     if (!action.type) {
//         return next(action);
//     }

//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());

//     next(action)

//     console.log('nextState: ', store.getState());
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' &&
    logger,
    sagaMiddleware]
    .filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
