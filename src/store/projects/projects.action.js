/*
 * File: category.action.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:33:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Action creator functions for the category reducer.
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { PROJECTS_ACTION_TYPE } from "./projects.types";

/**
 * Action creator function to set projects data.
 * @param {object} projects - The projects data to be set.
 * @returns {object} An action object with the type and payload.
 */
export const setProjects = (projects) => {
    return createAction(PROJECTS_ACTION_TYPE.SET_PROJECTS_MAP, projects);
};

/**
 * Action creator function to trigger the fetch projects start action.
 * @returns {object} An action object with the type.
 */
export const fetchProjectsStart = () => createAction(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_START);

/**
 * Action creator function to handle the fetch projects success action.
 * @param {object} projects - The fetched projects data.
 * @returns {object} An action object with the type and payload.
 */
export const fetchProjectsSuccess = (projects) =>
    createAction(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_SUCCESS, projects);

/**
 * Action creator function to handle the fetch projects failure action.
 * @param {string} errorMessage - The error message.
 * @returns {object} An action object with the type and payload.
 */
export const fetchProjectsFailed = (errorMessage) =>
    createAction(PROJECTS_ACTION_TYPE.FETCH_PROJECTS_FAILED, errorMessage);
