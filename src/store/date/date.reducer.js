/*
 * File: date.reducer.js
 * Project: portfolio
 * File Created: Saturday, 8th July 2023 12:20:06 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 1:49:42 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { DATE_ACTION_TYPE } from "./date.types";

const INITIAL_STATE = {
    savedDate: null,
    isLoading: false,
    error: null,
}

export const dateReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case DATE_ACTION_TYPE.DATE_EVALUATION_START:
            return {
                ...state,
                isLoading: true,
            };
        case DATE_ACTION_TYPE.SETTING_NEW_DATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                savedDate: payload
            }
        case DATE_ACTION_TYPE.DATE_EVALUATION_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        case DATE_ACTION_TYPE.DATE_EVALUATION_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload,
            };
        default:
            return state;
    }
}