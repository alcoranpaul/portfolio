/*
 * File: root-reducert.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:20:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 1:18:08 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: The root reducer of the application.
 */

import { combineReducers } from "redux";

import { projectsReducer } from "./projects/projects.reducer";
import { adminUserReducer } from "./adminUser/adminUser.reducer";
import { worksReducer } from "./works/works.reducer";
import { skillsReducer } from "./skills/skills.reducer";
import { dateReducer } from "./date/date.reducer";

/**
 * The root reducer of the application.
 * @constant
 */
export const rootReducer = combineReducers({
    user: adminUserReducer,
    projectsMap: projectsReducer,
    worksMap: worksReducer,
    skillsMap: skillsReducer,
    date: dateReducer
})