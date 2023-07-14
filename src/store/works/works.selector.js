/*
 * File: works.selector.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:47:43 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 2:55:21 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createSelector } from 'reselect';

/**
 * Selects the works reducer from the state.
 *
 * @param {Object} state - The Redux state.
 * @returns {Object} - The works reducer state.
 */
const selectWorksReducer = (state) => {
    return state.worksMap;
};

/**
 * Selects the works map from the works reducer.
 *
 * @param {Object} worksSlice - The works reducer state.
 * @returns {Object} - The works map.
 */
export const selectWorksMap = createSelector(
    [selectWorksReducer],
    (worksSlice) => {
        return worksSlice.works;
    }
);

/**
 * Selects the works from the works map.
 *
 * @param {Object} works - The works map.
 * @returns {Object} - The selected works.
 */
export const selectWorks = createSelector(
    [selectWorksMap],
    (works) => {
        return works;
    }
);
