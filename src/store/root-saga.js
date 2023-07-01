/*
 * File: root-sage.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 10:53:27 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 7:43:12 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description: 
 */

import { all, call } from 'redux-saga/effects';

import { adminUserSaga } from './adminUser/adminUser.saga';
import { projectsSaga } from './projects/projects.saga';

export function* rootSaga() {
    yield all([call(adminUserSaga), call(projectsSaga)]);

}