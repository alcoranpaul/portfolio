/*
 * File: root-reducert.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:20:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 2:55:28 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { combineReducers } from "redux";

import { projectsReducer } from "./projects/projects.reducer";
import { adminUserReducer } from "./adminUser/adminUser.reducer";

export const rootReducer = combineReducers({
    projectsMap: projectsReducer,
    user: adminUserReducer
})