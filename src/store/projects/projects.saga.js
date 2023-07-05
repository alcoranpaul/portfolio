/*
 * File: projects.saga.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 7:39:59 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 2:18:46 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Saga functions for the projects state.
 */

import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';

import { fetchProjectsSuccess, fetchProjectsFailed } from './projects.action';
import { PROJECTS_ACTION_TYPE } from './projects.types';

import { selectProjectsMap } from './projects.selector';

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
 * Worker saga responsible for checking if projects already exist in the redux store.
 * @generator 
 * @function    
 */
export function* checkProjectsExist() {
    try {
        // Check if projects already exist in the redux store
        const localProjects = yield select(selectProjectsMap);

        // If projects do not exist in the redux store, fetch them from firebase
        if (!localProjects || Object.keys(localProjects).length === 0) {
            // Call the getCollection function from firebase.utils to fetch projects
            yield call(fetchProjectsAsync);
        }

    } catch (error) {
        yield put(fetchProjectsFailed(error));
    }
}

/**
 * Worker saga responsible for refreshing projects asynchronously from firebase.
 * @generator
 * @function
 */
export function* refreshProjects() {
    try {
        yield call(fetchProjectsAsync);
    } catch (error) {
        yield put(fetchProjectsFailed(error));
    }
}

/**
 * Watcher saga responsible for triggering the refreshProjects saga.
 */
export function* onRefreshProjects() {
    yield takeLatest(PROJECTS_ACTION_TYPE.REFRESH_PROJECTS, refreshProjects);
}

/**
 * Watcher saga responsible for triggering the fetchProjectsAsync saga.
 * triggers when the FETCH_PROJECTS_START action is dispatched.
 * @generator
 * @function
 */
export function* onFetchProjects() {
    yield takeLatest(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START, checkProjectsExist);
}

/**
 * Root saga that combines all project-related sagas.
 * @generator
 * @function
 */
export function* projectsSaga() {
    yield all([
        call(onFetchProjects),
        call(onRefreshProjects)]);
}
