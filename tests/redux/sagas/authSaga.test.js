import 'babel-polyfill'; //required for yield
import {call, put} from 'redux-saga/effects';
import {loggedIn, pingSuccess, pingStart, loggedOut, loginFailed} from '../../../app/redux/actions/authActions';
import {loginSaga, logoutSaga, pingStartSaga} from '../../../app/redux/sagas/authSaga';
import {login, logout, ping} from '../../../app/config/api/authAPI';
import mockLocalStorage from '../../utils/testUtils';
// mock the localStorage
window.localStorage = mockLocalStorage();
// mock the sessionStorage
window.sessionStorage = mockLocalStorage();

describe('authSaga test', () => {

    describe('loginSaga success', () => {
        const mockPayload = {
            credentials: {
                username: 'username',
                password: 'password'
            }
        };
        const mockResponse = {
            user: {
                name: 'name',
                surname: 'surname'
            },
            token: 'token'
        };
        const mockPingResponse = {
            user: {
                name: 'name',
                surname: 'surname'
            },
            date: '2017-03-18'
        };
        const saga = loginSaga({payload: mockPayload});
        let output;

        it('should call login on api object', (done) => {
            output = saga.next().value;
            const expected = call(login, mockPayload.credentials);
            expect(output).toEqual(expected);
            done();
        });

        it('should put LOGGED_IN action with user and token', (done) => {
            output = saga.next(mockResponse).value;
            const expected = put(loggedIn({user: mockResponse.user, token: mockResponse.token}));
            expect(output).toEqual(expected);
            expect(localStorage.getItem('token')).toEqual(mockResponse.token);
            expect(localStorage.getItem('authenticated')).toEqual('true');
            done();
        });

        it('should call ping and get response', (done) => {
            output = saga.next(mockPingResponse).value;
            const expected = call(ping, mockResponse.token);
            expect(output).toEqual(expected);
            done();
        });

        it('should put PING_SUCCESS action with user and date', (done) => {
            output = saga.next(mockPingResponse).value;
            const expected = put(pingSuccess({user: mockPingResponse.user, date: mockPingResponse.date}));
            expect(output).toEqual(expected);
            done();
        });

        it('should put PING_START action', (done) => {
            output = saga.next(mockPingResponse).value;
            const expected = put(pingStart());
            const finished = saga.next().done;
            expect(finished).toEqual(true);
            expect(output).toEqual(expected);
            done();
        });
    });

    describe('loginSaga failure', () => {
        const mockPayload = {
            credentials: {
                username: 'username',
                password: 'password'
            }
        };
        const saga = loginSaga({payload: mockPayload});
        let output;

        it('should call loginFailed', (done) => {
            saga.next();
            output = saga.next().value;
            const expected = put(loginFailed({error: 'error'}));
            expect(expected).toEqual(expected);
            done();
        });

    });

    describe('logoutSaga success', () => {
        const saga = logoutSaga();
        let output;
        const mockResponse = {result: 'result'};

        it('should call logout api and LOGGED_OUT action', (done) => {
            output = saga.next().value;
            let expected = call(logout);
            expect(output).toEqual(expected);

            output = saga.next(mockResponse).value;
            expected = put(loggedOut(mockResponse));
            expect(output).toEqual(expected);

            const finished = saga.next().done;
            expect(finished).toEqual(true);
            done();
        });
    });

    describe('pingStartSaga', () => {

    });

});
