import authReducer from '../../../app/redux/reducers/authReducer';
import {LOGGED_IN, LOGGING_IN, LOGIN_FAILED, LOGOUT, LOGGED_OUT, PING} from '../../../app/redux/actions/authActions'
import {SUBSCRIBE, UNSUBSCRIBE} from '../../../app/redux/actions/subscribeActions'

function storageMock() {
    var storage = {};

    return {
        setItem: function(key, value) {
            storage[key] = value || '';
        },
        getItem: function(key) {
            return key in storage ? storage[key] : null;
        },
        removeItem: function(key) {
            delete storage[key];
        },
        get length() {
            return Object.keys(storage).length;
        },
        key: function(i) {
            var keys = Object.keys(storage);
            return keys[i] || null;
        }
    };
}
window.localStorage = storageMock();

describe('authReducer', () => {

    it('should return default/initial state when action type is invalid', () => {
        const expected = {
            logged: false,
            logging: false,
            error: '',
            token: '',
            date: '',
            user: {}
        };

        const res = authReducer(expected, {type: 'strangetype'});
        expect(res).toEqual(expected);
    });

    it('should return logging in object for action type LOGGING_IN', () => {
        const state = { someProp: 'asdf'};
        const expected = {someProp: 'asdf', logging: true, error: ''};
        const res = authReducer(state, {type: LOGGING_IN});
        expect(res).toEqual(expected);
    });

    it('should return logged in object for action type LOGGED_IN', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGGED_IN, user: { username: 'username'}, token: 'token'};
        const expected = {someProp: 'asdf', logging: false, user: { username: 'username'}, token: 'token'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return logout object for action type LOGOUT', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGOUT, user: { username: 'username'}, token: 'token'};
        const expected = {someProp: 'asdf', logged: false, user: {}, token: ''};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return login failed object for action type LOGIN_FAILED', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGIN_FAILED, error: 'error'};
        const expected = {someProp: 'asdf', logging: false, error: 'error'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return logged out object for action type LOGGED_OUT', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGGED_OUT, user: { username: 'username'}, token: 'token'};
        const expected = {someProp: 'asdf', logged: false, logging: false, error: '', token: '', user: {}};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return ping object with user for action type PING and has user object', () => {
        const state = { someProp: 'asdf'};
        const action = { type: PING, user: { username: 'username'}, date: 'date'};
        const expected = {someProp: 'asdf', logged: true, error: '', user: { username: 'username'}, date: 'date'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return ping object with logged false when action does\'nt have user object for action type PING', () => {
        const state = { someProp: 'asdf'};
        const action = { type: PING };
        const expected = {someProp: 'asdf', logged: false, user: {}};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return subscribe object for action type SUBSCRIBE', () => {
        const state = { someProp: 'asdf'};
        const action = { type: SUBSCRIBE, user: { username: 'username'}, token: 'token'};
        const expected = {someProp: 'asdf', user: { username: 'username'}};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return unsubscribe object for action type UNSUBSCRIBE', () => {
        const state = { someProp: 'asdf'};
        const action = { type: UNSUBSCRIBE, user: { username: 'username'}, token: 'token'};
        const expected = {someProp: 'asdf', user: { username: 'username'}};
        const res = authReducer(state, action);

        expect(res).toEqual(expected);
    });
});