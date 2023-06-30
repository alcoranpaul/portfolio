/*
 * File: user.selector.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:25 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 10:36:38 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createSelector } from 'reselect';

const selectProjectReducer = (state) => {
    console.log(`selectProjectReducer has ran`)
    return state.projectsMap
}

export const selectProjectsMap = createSelector(
    [selectProjectReducer],
    (projectsSlice) => {
        console.log(`selectProjectsMap has ran`)
        return projectsSlice.projects
    }
);

export const selectProjects = createSelector(
    [selectProjectsMap],
    (projectsMap) => {
        console.log(`selectProjects has ran`)
        return projectsMap
    }
);