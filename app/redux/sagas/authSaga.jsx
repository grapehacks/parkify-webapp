import 'babel-polyfill'; //required for yield
import { takeLatest, delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {hashHistory} from 'react-router'
import {LOGGING_IN, LOGOUT, PING_START} from '../actions/actionTypes';
import {loggedIn, loggedOut, loginFailed, pingSuccess, pingStart} from '../actions/authActions';
import {login, logout, ping} from '../../config/api/authAPI';

export function* loginSaga({payload}) {
    try {
        // login
        let response = yield call(login, payload.credentials);
        const token = response.token;
        localStorage.setItem('token', token);
        localStorage.setItem('authenticated', 'true');
        yield put(loggedIn({user: response.user, token: token}));

        // ping
        response = yield call(ping, token);
        yield put(pingSuccess({user: response.user, date: response.date}));
        yield put(pingStart());
        hashHistory.push('/app');

    } catch(e) {
        yield put(loginFailed({ error: 'Incorrect user name or password'}));
    }
}

export function* logoutSaga() {
    try {
        const response = yield call(logout);
        yield put(loggedOut(response));
    } catch(e) {
        yield put(loginFailed({ error: 'Failed to login.'}));
    }
}

export function* pingStartSaga() {
    const halOfMinute = 30000;
    try {
        while (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            const response = yield call(ping, token);
            if(!response.user) {
                hashHistory.push('/login');
            } else {
                yield put(pingSuccess({user: response.user, date: response.date}));
            }
            yield delay(halOfMinute);
        }
    } catch(e) {
        yield put(loginFailed({ error: 'Failed to login.'}));
    }
}

export default function* watch() {
    yield* [
        takeLatest(LOGGING_IN, loginSaga),
        takeLatest(LOGOUT, logoutSaga),
        takeLatest(PING_START, pingStartSaga),
    ];
}