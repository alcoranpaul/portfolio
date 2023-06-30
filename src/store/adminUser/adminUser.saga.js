/*
 * File: adminUser.saga.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 11:28:42 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 3:30:48 pm
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

// Function to get user snapshot from authentication data
export function* getSnapshotFromAuth(userAuth, additionalDetails) {
    try {
        // Call the signInAdmin function from firebase.utils to sign in the admin user
        const userSnapshot = yield call(signInAdmin, userAuth, additionalDetails);

        // Dispatch the signInSuccess action with the user data
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    } catch (error) {
        // Dispatch the signInFailed action with the error
        yield put(signInFailed(error));
    }
}

// Function to sign in with Google
export function* signInWithGoogle() {
    try {
        // Call the signInWithGooglePopup function from firebase.utils to sign in with Google
        const { user } = yield call(signInWithGooglePopup);

        // Call the getSnapshotFromAuth function with the user data
        yield call(getSnapshotFromAuth, user);
    } catch (error) {
        // Dispatch the signInFailed action with the error
        yield put(signInFailed(error));
    }
}

// Function to sign out
export function* signOut() {
    try {
        // Call the signOutAdmin function from firebase.utils to sign out the admin user
        yield call(signOutAdmin);

        // Dispatch the signOutSuccess action
        yield put(signOutSuccess());
    } catch (error) {
        // Dispatch the signOutFailed action with the error
        yield put(signOutFailed(error));
    }
}

// Function to check if the user is authenticated
export function* isUserAuthenticated() {
    try {
        // Call the getCurrentUser function from firebase.utils to get the current user
        const userAuth = yield call(getCurrentUser);

        // If userAuth is null or undefined, return without further processing
        if (!userAuth) return;

        // Call the getSnapshotFromAuth function with the userAuth data
        yield call(getSnapshotFromAuth, userAuth);
    } catch (error) {
        // Dispatch the signInFailed action with the error
        yield put(signInFailed(error));
    }
}

// Function to handle the admin sign-in start action
export function* onAdminSignInStart() {
    // Take the latest occurrence of SIGN_IN_START action and call the signInWithGoogle function
    yield takeLatest(ADMINUSER_ACTION_TYPE.SIGN_IN_START, signInWithGoogle);
}

// Function to handle the check user session action
export function* onCheckUserSession() {
    // Take the latest occurrence of CHECK_USER_SESSION action and call the isUserAuthenticated function
    yield takeLatest(ADMINUSER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

// Function to handle the sign-out start action
export function* onSignOutStart() {
    // Take the latest occurrence of SIGN_OUT_START action and call the signOut function
    yield takeLatest(ADMINUSER_ACTION_TYPE.SIGN_OUT_START, signOut);
}

// Main adminUserSaga function to combine and run all the sagas
export function* adminUserSaga() {
    // Run all the sagas concurrently using the all function
    yield all([
        call(onCheckUserSession),
        call(onAdminSignInStart),
        call(onSignOutStart)
    ]);
}
