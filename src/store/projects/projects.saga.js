/*
 * File: projects.saga.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 7:39:59 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:36:38 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Saga functions for the projects state.
 */

import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';

import { fetchProjectsSuccess, fetchProjectsFailed } from './projects.action';
import { PROJECTS_ACTION_TYPE } from './projects.types';

/**
 * Worker saga responsible for fetching projects asynchronously from firebase.
 * @generator
 * @function
 */
export function* fetchProjectsAsync() {
    try {
        // Call the getCollection function from firebase.utils to fetch projects
        const projects = yield call(getCollection, COLLECTION_TYPE.projects);
        yield put(fetchProjectsSuccess(projects));
    } catch (error) {
        yield put(fetchProjectsFailed(error));
    }
}

/**
 * Watcher saga responsible for triggering the fetchProjectsAsync saga.
 * @generator
 * @function
 */
export function* onFetchProjects() {
    yield takeLatest(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START, fetchProjectsAsync);
}

/**
 * Root saga that combines all project-related sagas.
 * @generator
 * @function
 */
export function* projectsSaga() {
    yield all([call(onFetchProjects)]);
}
