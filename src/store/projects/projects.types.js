/*
 * File: category.types.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:55 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 11th July 2023 10:39:52 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Action types for the category state.
 */

export const PROJECTS_ACTION_TYPE = {
    SET_PROJECTS_MAP: "projects/SET_PROJECTS_MAP",
    FETCH_PROJECTS_START: "projects/FETCH_PROJECTS_START",
    FETCH_PROJECTS_SUCCESS: "projects/FETCH_PROJECTS_SUCCESS",
    FETCH_PROJECTS_FAILED: "projects/FETCH_PROJECTS_FAILED",
    REFRESH_PROJECTS: "projects/REFRESH_PROJECTS",

    REMOVE_PROJECTS_START: "projects/REMOVE_PROJECTS_START",
    REMOVE_PROJECTS_SUCCESS: "projects/REMOVE_PROJECTS_SUCCESS",
    REMOVE_PROJECTS_FAILED: "projects/REMOVE_PROJECTS_FAILED",
}