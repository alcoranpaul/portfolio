/*
 * File: works.saga.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:47:37 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 6:03:24 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Saga functions for the works state.
 */

import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';

import { fetchWorksSuccess, fetchWorksFailed } from './works.action';
import { WORKS_ACTION_TYPE } from './works.types';

import { selectWorksMap } from './works.selector';

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
 * Check if works already exist in the redux store. If not, fetch them from firebase.
 * @generator
 * @function
 */
export function* checkWorksExist() {
    try {
        // Check if works already exist in the redux store
        const localWorks = yield select(selectWorksMap);

        // If works do not exist in the redux store, fetch them from firebase
        if (!localWorks || Object.keys(localWorks).length === 0) {
            // Call the getCollection function from firebase.utils to fetch works
            yield call(fetchWorksAsync);
        }
        else {
            yield put(fetchWorksSuccess(localWorks));
        }

    } catch (error) {
        yield put(fetchWorksFailed(error));
    }
}

/**
 * Worker saga responsible for refreshing works asynchronously from firebase.
 * @generator
 * @function
 */
export function* refreshWorks() {
    try {
        yield call(fetchWorksAsync);
    } catch (error) {
        yield put(fetchWorksFailed(error));
    }
}

export function* onRefreshWorks() {
    yield takeLatest(WORKS_ACTION_TYPE.REFRESH_WORKS, refreshWorks);
}

/**
 * Watcher saga responsible for triggering the fetchworksAsync saga.
 * @generator
 * @function
 */
export function* onFetchWorks() {
    yield takeLatest(WORKS_ACTION_TYPE.FETCH_WORKS_START, checkWorksExist);
}

/**
 * Root saga that combines all work-related sagas.
 * @generator
 * @function
 */
export function* worksSaga() {
    yield all([
        call(onFetchWorks),
        call(onRefreshWorks)]);
}
