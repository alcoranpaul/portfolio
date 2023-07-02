/*
 * File: works.saga.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:47:37 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 6:13:29 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Saga functions for the works state.
 */

import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';

import { fetchWorksSuccess, fetchWorksFailed } from './works.action';
import { WORKS_ACTION_TYPE } from './works.types';

/**
 * Worker saga responsible for fetching works asynchronously from firebase.
 * @generator
 * @function
 */
export function* fetchWorksAsync() {
    try {
        // Call the getCollection function from firebase.utils to fetch works
        const works = yield call(getCollection, COLLECTION_TYPE.works);
        yield put(fetchWorksSuccess(works));
    } catch (error) {
        yield put(fetchWorksFailed(error));
    }
}

/**
 * Watcher saga responsible for triggering the fetchworksAsync saga.
 * @generator
 * @function
 */
export function* onFetchWorks() {
    yield takeLatest(WORKS_ACTION_TYPE.FETCH_WORKS_START, fetchWorksAsync);
}

/**
 * Root saga that combines all work-related sagas.
 * @generator
 * @function
 */
export function* worksSaga() {
    yield all([call(onFetchWorks)]);
}
