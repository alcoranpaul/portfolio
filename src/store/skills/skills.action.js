/*
 * File: skills.action.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:48:11 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Wednesday, 5th July 2023 2:19:16 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { SKILLS_ACTION_TYPE } from "./skills.types";

/**
 * Action creator function to trigger the fetch skills start action.
 * @returns {object} An action object with the type.
 */
export const fetchSkillsStart = () => createAction(SKILLS_ACTION_TYPE.FETCH_SKILLS_START);

/**
 * Action creator function to trigger the refresh skills action.
 * @returns {object} An action object with the type.
 */
export const refreshSkills = () => createAction(SKILLS_ACTION_TYPE.REFRESH_SKILLS);

/**
 * Action creator function to handle the fetch skills success action.
 * @param {object} skills - The fetched skills data.
 * @returns {object} An action object with the type and payload.
 */
export const fetchSkillsSuccess = (skills) =>
    createAction(SKILLS_ACTION_TYPE.FETCH_SKILLS_SUCCESS, skills);


/**
 * Action creator function to handle the fetch skills failure action.
 * @param {string} errorMessage - The error message.
 * @returns {object} An action object with the type and payload.
 */
export const fetchSkillsFailed = (errorMessage) =>
    createAction(SKILLS_ACTION_TYPE.FETCH_SKILLS_FAILED, errorMessage);
