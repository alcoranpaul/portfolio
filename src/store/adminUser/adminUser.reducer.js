/*
 * File: adminUser.reducer.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 12:00:09 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:37:41 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Reducer function for the admin user.
 */

import { ADMINUSER_ACTION_TYPE } from './adminUser.types';

/**
 * Initial state for the admin user reducer.
 * @type {Object}
 */
const INITIAL_STATE = {
    adminUser: null,
    isLoading: false,
    error: null,
};

/**
 * Reducer function for the admin user.
 * @param {Object} state - Current state.
 * @param {Object} action - Action object.
 * @returns {Object} New state.
 */
export const adminUserReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case ADMINUSER_ACTION_TYPE.SIGN_IN_SUCCESS:
            return {
                ...state,
                adminUser: payload, // Update currentUser and overwrite existing value with payload
            };

        case ADMINUSER_ACTION_TYPE.SIGN_OUT_SUCCESS:
            return {
                ...state,
                adminUser: null,
            };

        case ADMINUSER_ACTION_TYPE.SIGN_OUT_FAILED:
        case ADMINUSER_ACTION_TYPE.SIGN_IN_FAILED:
            return {
                ...state,
                error: payload,
            };

        default:
            return state;
    }
};
