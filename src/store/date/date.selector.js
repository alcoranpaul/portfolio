/*
 * File: date.selector.js
 * Project: portfolio
 * File Created: Saturday, 8th July 2023 12:20:19 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Saturday, 8th July 2023 12:34:14 am
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createSelector } from "reselect";

const selectDateReducer = (state) => state.date;

export const selectSavedDate = createSelector(
    [selectDateReducer],
    (date) => date.savedDate
);