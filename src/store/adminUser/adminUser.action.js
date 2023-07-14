/*
 * File: adminUSer.action.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 12:00:16 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:36:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Action creator functions for the adminUser state.
 */

import { createAction } from '../../utils/reducer/reducer.utils';
import { ADMINUSER_ACTION_TYPE } from './adminUser.types';

/**
 * Action creator function to set the admin user.
 * @param {Object} user - The admin user.
 * @returns {Object} The action object.
 */
export const setAdminUser = (user) => {
    // Create a function that will update the currentUser
    return createAction(ADMINUSER_ACTION_TYPE.SET_ADMINUSER, user);
};

/**
 * Action creator function to check user session.
 * @returns {Object} The action object.
 */
export const checkUserSession = () => createAction(ADMINUSER_ACTION_TYPE.CHECK_USER_SESSION);

/**
 * Action creator function for sign-in start.
 * @returns {Object} The action object.
 */
export const signInStart = () => createAction(ADMINUSER_ACTION_TYPE.SIGN_IN_START);

/**
 * Action creator function for sign-in success.
 * @param {Object} user - The signed-in user.
 * @returns {Object} The action object.
 */
export const signInSuccess = (user) => createAction(ADMINUSER_ACTION_TYPE.SIGN_IN_SUCCESS, user);

/**
 * Action creator function for sign-in failure.
 * @param {Object} error - The error object.
 * @returns {Object} The action object.
 */
export const signInFailed = (error) => createAction(ADMINUSER_ACTION_TYPE.SIGN_IN_FAILED, error);

/**
 * Action creator function for sign-out start.
 * @returns {Object} The action object.
 */
export const signOutStart = () => createAction(ADMINUSER_ACTION_TYPE.SIGN_OUT_START);

/**
 * Action creator function for sign-out success.
 * @returns {Object} The action object.
 */
export const signOutSuccess = () => createAction(ADMINUSER_ACTION_TYPE.SIGN_OUT_SUCCESS);

/**
 * Action creator function for sign-out failure.
 * @param {Object} error - The error object.
 * @returns {Object} The action object.
 */
export const signOutFailed = (error) => createAction(ADMINUSER_ACTION_TYPE.SIGN_OUT_FAILED, error);
