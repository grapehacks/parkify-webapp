import authReducer from '../../../app/redux/reducers/authReducer';
import {LOGGED_IN, LOGGING_IN, LOGIN_FAILED, LOGOUT, LOGGED_OUT, PING_SUCCESS, SUBSCRIBE_SUCCESS, UNSUBSCRIBE_SUCCESS} from '../../../app/redux/actions/actionTypes'

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

    it('should return default/initial state', () => {
        const expected = {
            logged: false,
            logging: false,
            error: '',
            token: '',
            date: '',
            user: {}
        };

        const res = authReducer();
        expect(res).toEqual(expected);
    });

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
        const action = { type: LOGGED_IN, payload: {user: { username: 'username'}, token: 'token'}};
        const expected = {someProp: 'asdf', logging: false, logged: true, user: { username: 'username'}, token: 'token'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return logout object for action type LOGOUT', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGOUT, payload: {user: { username: 'username'}, token: 'token'}};
        const expected = {someProp: 'asdf', logging: false, logged: false, user: {}, token: ''};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return login failed object for action type LOGIN_FAILED', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGIN_FAILED, payload: {error: 'error'}};
        const expected = {someProp: 'asdf', logging: false, error: 'error'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return logged out object for action type LOGGED_OUT', () => {
        const state = { someProp: 'asdf'};
        const action = { type: LOGGED_OUT, payload: {user: { username: 'username'}, token: 'token'}};
        const expected = {someProp: 'asdf', logged: false, logging: false, error: '', token: '', user: {}};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return ping object with user for action type PING_SUCCESS and has user object', () => {
        const state = { someProp: 'asdf'};
        const action = { type: PING_SUCCESS, payload: {user: { username: 'username'}, date: 'date'}};
        const expected = {someProp: 'asdf', logged: true, error: '', user: { username: 'username'}, date: 'date'};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return ping object with logged false when action does\'nt have user object for action type PING_SUCCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: PING_SUCCESS, payload: {}};
        const expected = {someProp: 'asdf', logging: false, logged: false, user: {}};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return subscribe object for action type SUBSCRIBE_SUCCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: SUBSCRIBE_SUCCESS, payload: {user: { username: 'username'}, token: 'token'}};
        const expected = {someProp: 'asdf', user: { username: 'username'}};
        const res = authReducer(state, action);
        expect(res).toEqual(expected);
    });

    it('should return unsubscribe object for action type UNSUBSCRIBE_SUCCESS', () => {
        const state = { someProp: 'asdf'};
        const action = { type: UNSUBSCRIBE_SUCCESS, payload: {user: { username: 'username'}, token: 'token'}};
        const expected = {someProp: 'asdf', user: { username: 'username'}};
        const res = authReducer(state, action);

        expect(res).toEqual(expected);
    });
});