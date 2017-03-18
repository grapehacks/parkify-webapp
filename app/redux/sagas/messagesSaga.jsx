import 'babel-polyfill'; //required for yield
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects'
import {GET_MESSAGES, MARK_AS_READ} from '../actions/actionTypes';
import {markedAsRead, markedAsReadFailed, getMessagesStart, getMessagesFailed, getMessagesSuccess} from '../actions/messagesActions';
import {getMessages, markAsRead} from '../../config/api/messagesAPI';
import {pingSuccess} from '../actions/authActions';
import {ping} from '../../config/api/authAPI';

export function* getMessagesSaga() {
    try {
        const token = localStorage.getItem('token');
        yield put(getMessagesStart());

        const response = yield call(getMessages, {token});
        yield put(getMessagesSuccess({messages: response.data}));

    } catch(e) {
        yield put(getMessagesFailed({ error: 'Failed get messages.'}));
    }
}

export function* markAsReadSaga({payload}) {
    try {
        // mark as read
        const token = localStorage.getItem('token');
        let response = yield call(markAsRead, {id: payload.message._id, token});
        yield put(markedAsRead({message: response.data}));

        // ping
        response = yield call(ping, token);
        yield put(pingSuccess({user: response.user, date: response.date}));

    } catch(e) {
        yield put(markedAsReadFailed({ error: 'Failed to mark message as read.'}));
    }
}


export default function* watch() {
    yield* [
        takeLatest(GET_MESSAGES, getMessagesSaga),
        takeLatest(MARK_AS_READ, markAsReadSaga)
    ];
}