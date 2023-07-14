/*
 * File: user.reducer.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:19 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 11th July 2023 11:20:34 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Reducer function for the projects state.
 */

import { PROJECTS_ACTION_TYPE } from "./projects.types";

/**
 * Initial state for the projects reducer.
 * @type {Object}
 */
const INITIAL_STATE = {
    projects: {},
    isLoading: false,
    error: null,
};

/**
 * Reducer function for the projects state.
 * @param {object} state - The current projects state.
 * @param {object} action - The dispatched action object.
 * @returns {object} The updated projects state.
 */
export const projectsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case PROJECTS_ACTION_TYPE.REMOVE_PROJECTS_START:
        case PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START:
            return {
                ...state,
                isLoading: true,
            };
        case PROJECTS_ACTION_TYPE.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: payload,
            };
        case PROJECTS_ACTION_TYPE.REMOVE_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: {}
            }
        case PROJECTS_ACTION_TYPE.REMOVE_PROJECTS_FAILED:
        case PROJECTS_ACTION_TYPE.FETCH_PROJECTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
};
