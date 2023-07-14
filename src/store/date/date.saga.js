/*
 * File: date.saga.js
 * Project: portfolio
 * File Created: Saturday, 8th July 2023 12:20:14 am
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Thursday, 13th July 2023 11:26:15 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { takeLatest, put, all, call, select } from "redux-saga/effects";

import { DATE_ACTION_TYPE } from "./date.types";
import { selectSavedDate } from "./date.selector";
import {
    checkDate,
    dateOutsideThreshold,
    removeLocalStorageStart,
    removeLocalStorageSuccess,
    removeLocalStorageFailed,
    settingNewDateStart,
    settingNewDateSuccess,
    settingNewDateFailed,
    dateWithinThreshold,
    dateEvaluationSuccess,
    dateEvaluationFailed
} from "./date.action";

import { onRemoveWorksStart } from "../works/works.action";
import { onRemoveProjectsStart } from '../projects/projects.action'
import { onRemoveSkillsStart } from "../skills/skills.action";

export function* settingNewDateProcess(currentDate) {
    try {
        yield put(settingNewDateStart())
        yield put(settingNewDateSuccess(currentDate))
    }
    catch (error) {
        yield put(settingNewDateFailed(error))
    }

}

export function* removeLocalStorageProcess() {
    try {
        yield put(removeLocalStorageStart())
        yield put(onRemoveWorksStart())
        yield put(onRemoveProjectsStart())
        yield put(onRemoveSkillsStart())

        yield put(removeLocalStorageSuccess())
    }
    catch (error) {
        yield put(removeLocalStorageFailed(error))
    }
}

export function* checkDateProcess() {
    try {
        yield put(checkDate())
        const localDate = yield select(selectSavedDate)

        if (!localDate || !(localDate instanceof Date)) {
            return {
                currentDate: new Date(),
                isSavedDateOutsideThreshold: true
            };
        }
        const currentDate = new Date();
        const threshold = new Date(localDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        const isSavedDateOutsideThreshold = currentDate > threshold;
        return {
            currentDate,
            isSavedDateOutsideThreshold
        }
    }
    catch (error) {
        yield put(dateEvaluationFailed(error))
    }
}

export function* dateEvaluationProcess() {
    try {
        const { currentDate, isSavedDateOutsideThreshold } = yield call(checkDateProcess)


        if (isSavedDateOutsideThreshold) {
            yield put(dateOutsideThreshold())
            yield call(removeLocalStorageProcess)
            yield call(settingNewDateProcess, currentDate)
        }
        else {
            yield put(dateWithinThreshold())
        }

        yield put(dateEvaluationSuccess())
    }
    catch (error) {
        yield put(dateEvaluationFailed(error))
    }

}


export function* beginDateEvaluation() {
    yield takeLatest(DATE_ACTION_TYPE.DATE_EVALUATION_START, dateEvaluationProcess)
}

export function* dateSaga() {
    yield all([
        call(beginDateEvaluation)])
}