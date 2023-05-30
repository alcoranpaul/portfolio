/*
 * File: category.action.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:42 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 30th May 2023 4:26:26 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPE } from "./category.types";

export const setCategories = (categories) => { // Create a function that will update the currentUser
    return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORIES_MAP, categories)
}