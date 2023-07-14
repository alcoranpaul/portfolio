/*
 * File: user.selector.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:25 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:36:56 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: Selector functions for the projects state.
 */

import { createSelector } from 'reselect';

/**
 * Selects the project reducer state from the root state.
 * @param {Object} state - The root state of the application.
 * @returns {Object} The project reducer state.
 */
const selectProjectReducer = (state) => {
    return state.projectsMap;
};

/**
 * Selects the projects map from the project reducer state.
 * @param {Object} projectsSlice - The project reducer state.
 * @returns {Object} The projects map.
 */
export const selectProjectsMap = createSelector(
    [selectProjectReducer],
    (projectsSlice) => {
        return projectsSlice.projects;
    }
);

/**
 * Selects the projects from the projects map.
 * @param {Object} projectsMap - The projects map.
 * @returns {Object} The projects.
 */
export const selectProjects = createSelector(
    [selectProjectsMap],
    (projectsMap) => {
        return projectsMap;
    }
);
