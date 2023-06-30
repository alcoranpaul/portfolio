/*
 * File: adminUSer.action.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 12:00:16 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 1:43:01 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { ADMINUSER_ACTION_TYPE } from "./adminUser.types";

export const setAdminUser = (user) => { // Create a function that will update the currentUser
    return createAction(ADMINUSER_ACTION_TYPE.SET_ADMINUSER, user)
}

export const checkUserSession = () => createAction(ADMINUSER_ACTION_TYPE.CHECK_USER_SESSION)

export const signInStart = () => createAction(ADMINUSER_ACTION_TYPE.SIGN_IN_START)

export const signInSuccess = (user) => createAction(ADMINUSER_ACTION_TYPE.SIGN_IN_SUCCESS, user)

export const signInFailed = (error) => createAction(ADMINUSER_ACTION_TYPE.SIGN_IN_FAILED, error)

export const signOutStart = () => createAction(ADMINUSER_ACTION_TYPE.SIGN_OUT_START)

export const signOutSuccess = () => createAction(ADMINUSER_ACTION_TYPE.SIGN_OUT_SUCCESS)

export const signOutFailed = (error) => createAction(ADMINUSER_ACTION_TYPE.SIGN_OUT_FAILED, error)