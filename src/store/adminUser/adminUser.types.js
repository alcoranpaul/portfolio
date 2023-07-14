/*
 * File: adminUser.types.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 11:59:56 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:37:57 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Action types for the adminUser state.
 */

export const ADMINUSER_ACTION_TYPE = {
    SET_ADMINUSER: "adminUser/SET_ADMIN_USER",
    CHECK_USER_SESSION: "adminUser/CHECK_USER_SESSION",
    SIGN_IN_START: "adminUser/SIGN_IN_START",
    SIGN_IN_SUCCESS: "adminUser/SIGN_IN_SUCCESS",
    SIGN_IN_FAILED: "adminUser/SIGN_IN_FAILED",
    SIGN_OUT_START: "adminUser/SIGN_OUT_START",
    SIGN_OUT_SUCCESS: "adminUser/SIGN_OUT_SUCCESS",
    SIGN_OUT_FAILED: "adminUser/SIGN_OUT_FAILED",
}