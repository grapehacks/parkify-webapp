import { takeLatest } from 'redux-saga';
import * as types from '../actions/actionTypes';

export default function* authWatchSaga() {
    yield* [
        takeLatest(types.LOGGING_IN, loggingInSaga),
        takeLatest(types.LOGOUT, logoutSaga),
        takeLatest(types.PING, pingSaga),
    ];
}