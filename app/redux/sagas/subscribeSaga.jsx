import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {SUBSCRIBE, UNSUBSCRIBE} from '../actions/actionTypes';
import {process, failed, subscribeSuccess, unsubscribeSuccess} from '../actions/subscribeActions';
import {subscribe, unsubscribe} from '../../config/api/subscriptionAPI';

export function* subscribeSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        yield put(process());

        const response = yield call(subscribe, {token, params: payload});
        yield put(subscribeSuccess({user: response}));

    } catch(e) {
        yield put(failed({ error: 'Failed to subscribe for lottery.'}));
    }
}

export function* unsubscribeSaga({payload}) {
    try {
        const token = localStorage.getItem('token');
        yield put(process());

        const response = yield call(unsubscribe, {token, params: payload});
        yield put(unsubscribeSuccess({user: response}));

    } catch(e) {
        yield put(failed({ error: 'Failed to un-subscribe from lottery.'}));
    }
}


export default function* watch() {
    yield* [
        takeLatest(SUBSCRIBE, subscribeSaga),
        takeLatest(UNSUBSCRIBE, unsubscribeSaga)
    ];
}