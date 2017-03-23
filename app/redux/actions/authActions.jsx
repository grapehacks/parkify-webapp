import {LOGGING_IN, LOGGED_IN, LOGGED_OUT, LOGOUT, LOGIN_FAILED, PING_SUCCESS, PING_START, PING_FORCE, CLEAR_MESSAGES} from './actionTypes';

export const loggingIn = (payload) => ({
    type: LOGGING_IN,
    payload
});

export const loggedIn = (payload) => ({
    type: LOGGED_IN,
    payload
});

export const loggedOut = () => ({
    type: LOGGED_OUT
});

export const logout = () => ({
    type: LOGOUT
});

export const loginFailed = (payload) => ({
    type: LOGIN_FAILED,
    payload
});

export const pingForce = () => ({
    type: PING_FORCE
});

export const pingSuccess = (payload) => ({
    type: PING_SUCCESS,
    payload
});

export const pingStart = (payload) => ({
    type: PING_START,
    payload
});

export const clearMessages = (payload) => ({
    type: CLEAR_MESSAGES,
    payload
});
