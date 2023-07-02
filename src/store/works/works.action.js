/*
 * File: works.action.js
 * Project: portfolio
 * File Created: Saturday, 1st July 2023 2:47:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 1st July 2023 9:02:18 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */


import { createAction } from "../../utils/reducer/reducer.utils";
import { WORKS_ACTION_TYPE } from "./works.types";

/**
 * Action creator function to trigger the fetch works start action.
 * @returns {object} An action object with the type.
 */
export const fetchWorksStart = () => createAction(WORKS_ACTION_TYPE.FETCH_WORKS_START);

/**
 * Action creator function to handle the fetch works success action.
 * @param {object} works - The fetched works data.
 * @returns {object} An action object with the type and payload.
 */
export const fetchWorksSuccess = (works) =>
    createAction(WORKS_ACTION_TYPE.FETCH_WORKS_SUCCESS, works);

/**
 * Action creator function to handle the fetch works failure action.
 * @param {string} errorMessage - The error message.
 * @returns {object} An action object with the type and payload.
 */
export const fetchWorksFailed = (errorMessage) =>
    createAction(WORKS_ACTION_TYPE.FETCH_WORKS_FAILED, errorMessage);
