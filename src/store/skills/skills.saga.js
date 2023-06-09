/*
 * File: skills.saga.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:48:21 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 1:56:41 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import { getCollection, COLLECTION_TYPE } from '../../utils/firebase/firebase.utils';

import { fetchSkillsSuccess, fetchSkillsFailed, onRemoveSkillsSuccess, onRemoveSkillsFailed } from './skills.action';
import { SKILLS_ACTION_TYPE } from './skills.types';

import { selectSkillsMap } from './skills.selector';

export function* removeSkillsAsync() {
    try {
        yield put(onRemoveSkillsSuccess());
    }
    catch (error) {
        yield put(onRemoveSkillsFailed(error));
    }
}


/**
 * Worker saga responsible for fetching projects asynchronously from firebase.
 * @generator
 * @function
 */
export function* fetchSkillsAsync() {
    try {
        // Call the getCollection function from firebase.utils to fetch skills
        const skills = yield call(getCollection, COLLECTION_TYPE.skills);
        yield put(fetchSkillsSuccess(skills));
    } catch (error) {
        yield put(fetchSkillsFailed(error));
    }
}

/**
 * Check if skills already exist in the redux store. If not, fetch them from firebase.
 * @generator
 * @function
 */
export function* checkSkillsExist() {
    try {
        // Check if skills already exist in the redux store
        const localSkills = yield select(selectSkillsMap);

        // If skills do not exist in the redux store, fetch them from firebase
        if (!localSkills || Object.keys(localSkills).length === 0) {
            // Call the getCollection function from firebase.utils to fetch skills
            yield call(fetchSkillsAsync);
        }
        else {
            yield put(fetchSkillsSuccess(localSkills));
        }

    } catch (error) {
        yield put(fetchSkillsFailed(error));
    }
}

/**
 * Refresh skills by fetching them from firebase.
 * @generator
 * @function
 */
export function* refreshSkills() {
    try {
        yield call(fetchSkillsAsync);
    } catch (error) {
        yield put(fetchSkillsFailed(error));
    }
}

export function* onRefreshSkills() {
    yield takeLatest(SKILLS_ACTION_TYPE.REFRESH_SKILLS, refreshSkills);
}

/**
 * Watcher saga responsible for triggering the fetchProjectsAsync saga.
 * @generator
 * @function
 */
export function* onFetchSkills() {
    yield takeLatest(SKILLS_ACTION_TYPE.FETCH_SKILLS_START, checkSkillsExist);
}

export function* onRemoveSkills() {
    yield takeLatest(SKILLS_ACTION_TYPE.REMOVE_SKILLS_START, removeSkillsAsync);
}

/**
 * Root saga that combines all project-related sagas.
 * @generator
 * @function
 */
export function* skillsSaga() {
    yield all([
        call(onFetchSkills),
        call(onRefreshSkills),
        call(onRemoveSkills)]);
}
