/*
 * File: user.reducer.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:19 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 12:04:10 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { PROJECT_ACTION_TYPE } from "./projects.types";
const INITIAL_STATE = {
    projects: []
}

export const projectsReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case PROJECT_ACTION_TYPE.SET_PROJECTS_MAP:
            return {
                ...state, //Spread the previous state 
                projects: payload // Update currentUser and overwrite existing value with payload
            }
        default:
            return state

    }
}