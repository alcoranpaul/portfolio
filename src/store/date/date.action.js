/*
 * File: date.action.js
 * Project: portfolio
 * File Created: Saturday, 8th July 2023 12:20:00 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 1:50:05 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { DATE_ACTION_TYPE } from "./date.types";

export const dateEvaluationStart = () => createAction(DATE_ACTION_TYPE.DATE_EVALUATION_START);
export const checkDate = () => createAction(DATE_ACTION_TYPE.CHECK_DATE);
export const dateOutsideThreshold = () => createAction(DATE_ACTION_TYPE.DATE_OUTSIDE_THRESHOLD);
export const removeLocalStorageStart = () => createAction(DATE_ACTION_TYPE.REMOVE_LOCAL_STORAGE_START);
export const removeLocalStorageSuccess = () => createAction(DATE_ACTION_TYPE.REMOVE_LOCAL_STORAGE_SUCCESS);
export const removeLocalStorageFailed = (error) => createAction(DATE_ACTION_TYPE.REMOVE_LOCAL_STORAGE_FAILED, error);
export const settingNewDateStart = () => createAction(DATE_ACTION_TYPE.SETTING_NEW_DATE_START);
export const settingNewDateSuccess = (savedDate) => createAction(DATE_ACTION_TYPE.SETTING_NEW_DATE_SUCCESS, savedDate);
export const settingNewDateFailed = (error) => createAction(DATE_ACTION_TYPE.SETTING_NEW_DATE_FAILED, error);
export const dateWithinThreshold = () => createAction(DATE_ACTION_TYPE.DATE_WITHIN_THRESHOLD);
export const dateEvaluationSuccess = () => createAction(DATE_ACTION_TYPE.DATE_EVALUATION_SUCCESS);
export const dateEvaluationFailed = (error) => createAction(DATE_ACTION_TYPE.DATE_EVALUATION_FAILED, error);