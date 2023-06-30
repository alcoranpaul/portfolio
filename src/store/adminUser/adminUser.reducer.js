/*
 * File: adminUser.reducer.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 12:00:09 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 1:48:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { ADMINUSER_ACTION_TYPE } from "./adminUser.types";
const INITIAL_STATE = {
    adminUser: null,
    isLoading: false,
    error: null
}

export const adminUserReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case ADMINUSER_ACTION_TYPE.SIGN_IN_SUCCESS:
            return {
                ...state, //Spread the previous state 
                adminUser: payload // Update currentUser and overwrite existing value with payload
            }

        case ADMINUSER_ACTION_TYPE.SIGN_OUT_SUCCESS:
            return {
                ...state,
                adminUser: null
            }

        case ADMINUSER_ACTION_TYPE.SIGN_OUT_FAILED:
        case ADMINUSER_ACTION_TYPE.SIGN_IN_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return state

    }
}