/*
 * File: user.reducer.js
 * Project: portfolio
 * File Created: Tuesday, 30th May 2023 4:21:19 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 30th May 2023 4:27:06 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

const INITIAL_STATE = {
    categories: []
}

const categoryReducer = (state = {}, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state, //Spread the previous state 
                categoriesMap: payload // Update currentUser and overwrite existing value with payload
            }
        default:
            return state

    }
}