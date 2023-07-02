/*
 * File: skills.selector.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:48:26 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 2:57:00 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createSelector } from 'reselect';

/**
 * Selects the skills reducer from the state.
 *
 * @param {Object} state - The Redux state.
 * @returns {Object} - The skills reducer state.
 */
const selectSkillsReducer = (state) => {
    return state.skillsMap;
};

/**
 * Selects the skills map from the works reducer.
 *
 * @param {Object} skillsSlice - The skills reducer state.
 * @returns {Object} - The skills map.
 */
export const selectSkillsMap = createSelector(
    [selectSkillsReducer],
    (skillsSlice) => {
        return skillsSlice.skills;
    }
);

/**
 * Selects the skills from the works map.
 *
 * @param {Object} skills - The skills map.
 * @returns {Object} - The selected skills.
 */
export const selectSkills = createSelector(
    [selectSkillsMap],
    (skills) => {
        return skills;
    }
);
