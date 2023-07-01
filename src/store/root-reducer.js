/*
 * File: root-reducert.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:20:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:38:53 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: The root reducer of the application.
 */

import { combineReducers } from "redux";

import { projectsReducer } from "./projects/projects.reducer";
import { adminUserReducer } from "./adminUser/adminUser.reducer";

/**
 * The root reducer of the application.
 * @constant
 */
export const rootReducer = combineReducers({
    projectsMap: projectsReducer,
    user: adminUserReducer
})