import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {FETCH_LAST_DRAW} from '../actions/actionTypes';
import {fetchLastDrawSuccess, fetchLastDrawFailed} from '../actions/historyActions';
import {fetchLastDraw} from '../../config/api/historyAPI';

export function* fetchLastDrawSaga() {
    try {
        const token = localStorage.getItem('token');
        const response = yield call(fetchLastDraw, {token});
        yield put(fetchLastDrawSuccess({lastDraw: response}));

    } catch(e) {
        yield put(fetchLastDrawFailed({ error: 'Failed to fetch last draw.'}));
    }
}

export default function* watch() {
    yield* [
        takeLatest(FETCH_LAST_DRAW, fetchLastDrawSaga)
    ];
}