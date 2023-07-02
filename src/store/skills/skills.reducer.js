/*
 * File: skills.reducer.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:48:17 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 3:40:00 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { SKILLS_ACTION_TYPE } from "./skills.types";

/**
 * Initial state for the skills reducer.
 * @type {Object}
 */
const INITIAL_STATE = {
    skills: {},
    isLoading: false,
    error: null,
};

/**
 * Reducer function for the skills state.
 * @param {object} state - The current skills state.
 * @param {object} action - The dispatched action object.
 * @returns {object} The updated skills state.
 */
export const skillsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case SKILLS_ACTION_TYPE.FETCH_SKILLS_START:
            return {
                ...state,
                isLoading: true,
            };
        case SKILLS_ACTION_TYPE.FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                skills: payload,
            };
        case SKILLS_ACTION_TYPE.FETCH_SKILLS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
};
