import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {EDIT_LICENCE_NUMBER, CHANGE_PASSWORD} from '../actions/actionTypes';
import {editLicenceNumberSuccess, editLicenceNumberFailed, changePasswordSuccess, changePasswordFailed} from '../actions/accountActions';
import {editLicenceNumber, changePassword} from '../../config/api/accountAPI';

export function* editLicenceNumberSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(editLicenceNumber, {id: payload.userId, licenceNumber: payload.licenceNumber, token});
        yield put(editLicenceNumberSuccess({user: response}));

    } catch(e) {
        yield put(editLicenceNumberFailed({ error: 'Incorrect licence number'}));
    }
}

export function* changePasswordSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(changePassword, {id: payload.id, oldPassword: payload.oldPassword, newPassword: payload.newPassword, confirmPassword: payload.confirmPassword, token});
        yield put(changePasswordSuccess({user: response}));

    } catch(e) {
        yield put(changePasswordFailed({ error: e.response.data.message}));
    }
}

export default function* watch() {
    yield* [
        takeLatest(EDIT_LICENCE_NUMBER, editLicenceNumberSaga),
        takeLatest(CHANGE_PASSWORD, changePasswordSaga)
    ];
}