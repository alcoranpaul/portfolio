/*
 * File: root-sage.js
 * Project: portfolio
 * File Created: Friday, 30th June 2023 10:53:27 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 8:38:25 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:  Root saga for the application.
 */

import { all, call } from 'redux-saga/effects';

import { adminUserSaga } from './adminUser/adminUser.saga';
import { projectsSaga } from './projects/projects.saga';

/**
 * Root saga that combines all sagas.
 * @generator
 * @function
 */
export function* rootSaga() {
    yield all([call(adminUserSaga), call(projectsSaga)]);
}