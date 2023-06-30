/*
 * File: adminUser.saga.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 11:28:42 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 2:25:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { takeLatest, put, all, call } from 'redux-saga/effects';

import { ADMINUSER_ACTION_TYPE } from './adminUser.types';

import {
    signInSuccess,
    signInFailed,
    signOutSuccess,
    signOutFailed
} from './adminUser.action';

import {
    getCurrentUser,
    signInAdmin,
    signInWithGooglePopup,
    signOutAdmin
} from '../../utils/firebase/firebase.utils';


export function* getSnapshotFromAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(signInAdmin, userAuth, additionalDetails);

        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
    catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup)
        yield call(getSnapshotFromAuth, user);
    }
    catch (error) {
        yield put(signInFailed(error));
    }
}

export function* signOut() {
    try {
        yield call(signOutAdmin);
        yield put(signOutSuccess());
    }
    catch (error) {
        yield put(signOutFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromAuth, userAuth);
    }
    catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onAdminSignInStart() {
    yield takeLatest(ADMINUSER_ACTION_TYPE.SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
    yield takeLatest(ADMINUSER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);

}

export function* onSignOutStart() {
    yield takeLatest(ADMINUSER_ACTION_TYPE.SIGN_OUT_START, signOut);
}


export function* adminUserSaga() {
    yield all([call(onCheckUserSession), call(onAdminSignInStart)
        , call(onSignOutStart)]);
}