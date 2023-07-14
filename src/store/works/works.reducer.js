/*
 * File: works.reducer.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:47:32 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 12th July 2023 11:44:02 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { WORKS_ACTION_TYPE } from "./works.types";

/**
 * Initial state for the works reducer.
 * @type {Object}
 */
const INITIAL_STATE = {
    works: {},
    isLoading: false,
    error: null,
};

/**
 * Reducer function for the works state.
 * @param {object} state - The current works state.
 * @param {object} action - The dispatched action object.
 * @returns {object} The updated works state.
 */
export const worksReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case WORKS_ACTION_TYPE.REMOVE_WORKS_START:
        case WORKS_ACTION_TYPE.FETCH_WORKS_START:
            return {
                ...state,
                isLoading: true,
            };
        case WORKS_ACTION_TYPE.FETCH_WORKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                works: payload,
            };
        case WORKS_ACTION_TYPE.REMOVE_WORKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                works: {}
            }
        case WORKS_ACTION_TYPE.REMOVE_WORKS_FAILED:
        case WORKS_ACTION_TYPE.FETCH_WORKS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
};
