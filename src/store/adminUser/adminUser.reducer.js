/*
 * File: adminUser.reducer.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 12:00:09 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 12:04:09 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { ADMINUSER_ACTION_TYPE } from "./adminUser.types";
const INITIAL_STATE = {
    adminUser: null
}

export const adminUserReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case ADMINUSER_ACTION_TYPE.SET_ADMINUSER:
            return {
                ...state, //Spread the previous state 
                adminUser: payload // Update currentUser and overwrite existing value with payload
            }
        default:
            return state

    }
}