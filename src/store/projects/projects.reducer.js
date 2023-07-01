/*
 * File: user.reducer.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:19 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 7:38:50 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { PROJECTS_ACTION_TYPE } from "./projects.types";
const INITIAL_STATE = {
    projects: {},
    isLoading: false,
    error: null
}

export const projectsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START:
            return {
                ...state, //Spread the previous state 
                isLoading: true,
            }
        case PROJECTS_ACTION_TYPE.FETCH_PROJECTS_SUCCESS:
            return {
                ...state, //Spread the previous state
                isLoading: false,
                projects: payload
            }
        case PROJECTS_ACTION_TYPE.FETCH_PROJECTS_FAILED:
            return {
                ...state, //Spread the previous state
                isLoading: false,
                error: payload
            }

        default:
            return state

    }
}