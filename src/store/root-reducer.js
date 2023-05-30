/*
 * File: root-reducert.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:20:24 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 30th May 2023 4:27:29 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { combineReducers } from "redux";

import { categoryReducer } from "./category/category.reducer";

export const rootReducer = combineReducers({
    categories: categoryReducer
})