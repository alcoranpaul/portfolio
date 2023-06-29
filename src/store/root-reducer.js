/*
 * File: root-reducert.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:20:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 11:02:37 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { combineReducers } from "redux";

import { projectsReducer } from "./projects/projects.reducer";

export const rootReducer = combineReducers({
    projects: projectsReducer
})