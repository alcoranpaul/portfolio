/*
 * File: skills.saga.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:48:21 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 8:56:06 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { takeLatest, put, all, call } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';

import { fetchSkillsSuccess, fetchSkillsFailed } from './skills.action';
import { SKILLS_ACTION_TYPE } from './skills.types';

/**
 * Worker saga responsible for fetching projects asynchronously from firebase.
 * @generator
 * @function
 */
export function* fetchSkillsAsync() {
    try {
        // Call the getCollection function from firebase.utils to fetch projects
        const skills = yield call(getCollection, COLLECTION_TYPE.skills);
        yield put(fetchSkillsSuccess(skills));
    } catch (error) {
        yield put(fetchSkillsFailed(error));
    }
}

/**
 * Watcher saga responsible for triggering the fetchProjectsAsync saga.
 * @generator
 * @function
 */
export function* onFetchSkills() {
    yield takeLatest(SKILLS_ACTION_TYPE.FETCH_SKILLS_START, fetchSkillsAsync);
}

/**
 * Root saga that combines all project-related sagas.
 * @generator
 * @function
 */
export function* skillsSaga() {
    yield all([call(onFetchSkills)]);
}
