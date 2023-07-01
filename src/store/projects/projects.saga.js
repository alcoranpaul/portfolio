/*
 * File: projects.saga.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 7:39:59 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 7:42:46 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';


import { fetchProjectsSuccess, fetchProjectsFailed } from './projects.action';
import { PROJECTS_ACTION_TYPE } from './projects.types';

export function* fetchProjectsAsync() {
    try {
        const projects = yield call(getCollection, COLLECTION_TYPE.projects)
        yield put(fetchProjectsSuccess(projects))
    }
    catch (error) {
        yield put(fetchProjectsFailed(error))
    }
}

export function* onFetchProjects() {
    yield takeLatest(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START, fetchProjectsAsync)
}

export function* projectsSaga() {
    yield all([call(onFetchProjects)])
}