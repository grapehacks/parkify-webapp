import 'babel-polyfill'; //required for yield
import {call, put} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import {GET_MESSAGES, MARK_AS_READ} from '../../../app/redux/actions/actionTypes';
import {getMessagesStart, getMessagesSuccess, getMessagesFailed, markedAsReadFailed, markedAsRead} from '../../../app/redux/actions/messagesActions';
import {pingSuccess} from '../../../app/redux/actions/authActions';
import watch, {getMessagesSaga, markAsReadSaga} from '../../../app/redux/sagas/messagesSaga';
import {getMessages, markAsRead} from '../../../app/config/api/messagesAPI';
import {ping} from '../../../app/config/api/authAPI';
import mockLocalStorage from '../../utils/testUtils';
// mock the localStorage
window.localStorage = mockLocalStorage();
// mock the sessionStorage
window.sessionStorage = mockLocalStorage();

describe('messagesSaga test', () => {

    /*describe('watch', () => {
        const saga = watch();
        let output;

        it('should return correct watches - sagas waiting for actions', (done) => {
            output = saga.next();
            let expected = takeLatest(GET_MESSAGES, getMessagesSaga);
            expect(output).toEqual(expected);

            expected = takeLatest(MARK_AS_READ, markAsReadSaga);
            expect(output).toEqual(expected);

            const finished = saga.next().done;
            expect(finished).toEqual(true);

        });

    });*/

    describe('getMessagesSaga success', () => {
        const token = 'fakeToken';
        localStorage.setItem('token', token);
        const getMessagesFakeResponse = {
            data: [{_id: 'id', text: 'text'}]
        };
        const saga = getMessagesSaga();
        let output;

        it('should put GET_MESSAGES_START action', (done) => {
            output = saga.next().value;
            const expected = put(getMessagesStart());
            expect(output).toEqual(expected);
            done();
        });

        it('should call getMessages API', (done) => {
            output = saga.next().value;
            const expected = call(getMessages, {token});
            expect(output).toEqual(expected);
            done();
        });

        it('should put GET_MESSAGES_SUCCESS action', (done) => {
            output = saga.next(getMessagesFakeResponse).value;
            const expected = put(getMessagesSuccess({messages: getMessagesFakeResponse.data}));
            expect(output).toEqual(expected);

            const finished = saga.next().done;
            expect(finished).toEqual(true);

            done();
        });

    });

    describe('getMessagesSaga failure', () => {
        const saga = getMessagesSaga();
        let output;

        it('should catch exception when failing on getting messages', (done) => {
            saga.next();
            saga.next();
            output = saga.next().value;
            const expected = put(getMessagesFailed({error: 'Failed get messages.'}));
            expect(output).toEqual(expected);
            done();
        });

    });

    describe('markAsReadSaga success', () => {
        const fakeMarkAsReadResponse = {data: {_id: 'id'}};
        const mockPingResponse = {user: {name: 'name',surname: 'surname'},date: '2017-03-18'};
        const token = 'fakeToken';
        const payload = {payload: {message: {_id: 'id'}}};
        localStorage.setItem('token', token);
        const saga = markAsReadSaga(payload);
        let output;

        it('should call markAsRead API', (done) => {
            output = saga.next().value;
            const expected = call(markAsRead, {id: payload.payload.message._id, token});
            expect(output).toEqual(expected);
            done();
        });

        it('should put MARKED_AS_READ action', (done) => {
            output = saga.next(fakeMarkAsReadResponse).value;
            const expected = put(markedAsRead({message: fakeMarkAsReadResponse.data}));
            expect(output).toEqual(expected);
            done();
        });

        it('should call ping API', (done) => {
            output = saga.next(fakeMarkAsReadResponse).value;
            const expected = call(ping, token);
            expect(output).toEqual(expected);
            done();
        });

        it('should put PING_SUCCESS action', (done) => {
            output = saga.next(mockPingResponse).value;
            const expected = put(pingSuccess({user: mockPingResponse.user, date: mockPingResponse.date}));
            expect(output).toEqual(expected);
            const finished = saga.next().done;
            expect(finished).toEqual(true);
            done();
        });

    });

    describe('markAsReadSaga failure', () => {
        const token = 'fakeToken';
        localStorage.setItem('token', token);
        const saga = markAsReadSaga({payload: {message: {_id: 'id'}}});
        let output;

        it('should catch exception when failing on marking message as read', (done) => {
            saga.next();
            output = saga.next().value;
            const expected = put(markedAsReadFailed({error: 'Failed to mark message as read.'}));
            expect(output).toEqual(expected);
            done();
        });

    });

});
