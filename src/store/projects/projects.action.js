/*
 * File: category.action.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 7:37:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { PROJECTS_ACTION_TYPE } from "./projects.types";

export const setProjects = (projects) => { // Create a function that will update the currentUser
    return createAction(PROJECTS_ACTION_TYPE.SET_PROJECTS_MAP, projects)
}

export const fetchProjectsStart = () => createAction(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START)

export const fetchProjectsSuccess = (projects) =>
    createAction(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_SUCCESS, projects)

export const fetchProjectsFailed = (errorMessage) =>
    createAction(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_FAILED, errorMessage)