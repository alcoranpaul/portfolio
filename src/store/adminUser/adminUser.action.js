/*
 * File: adminUSer.action.js
 * Project: portfolio
 * File Created: Thursday, 29th June 2023 12:00:16 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 29th June 2023 12:05:13 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { createAction } from "../../utils/reducer/reducer.utils";
import { ADMINUSER_ACTION_TYPE } from "./adminUser.types";

export const setAdminUser = (user) => { // Create a function that will update the currentUser
    return createAction(ADMINUSER_ACTION_TYPE.SET_ADMINUSER, user)
}