import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {EDIT_LICENCE_NUMBER} from '../actions/actionTypes';
import {editLicenceNumberSuccess, editLicenceNumberFailed} from '../actions/accountActions';
import {editLicenceNumber} from '../../config/api/accountAPI';

export function* editLicenceNumberSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(editLicenceNumber, {id: payload.userId, licenceNumber: payload.licenceNumber, token});
        yield put(editLicenceNumberSuccess({user: response}));

    } catch(e) {
        yield put(editLicenceNumberFailed({ error: 'Incorrect licence number'}));
    }
}


export default function* watch() {
    yield* [
        takeLatest(EDIT_LICENCE_NUMBER, editLicenceNumberSaga)
    ];
}