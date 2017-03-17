import {LOGGING_IN, LOGGED_IN, LOGGED_OUT, LOGOUT, LOGIN_FAILED, PING_SUCCESS, PING_START} from './actionTypes';

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

export const pingSuccess = (payload) => ({
    type: PING_SUCCESS,
    payload
});

export const pingStart = (payload) => ({
    type: PING_START,
    payload
});

/*
import {hashHistory} from 'react-router';

/!*eslint-disable*!/
export function login(credentials) {
    return (dispatch, state, api) => {
        dispatch({type: LOGGING_IN});
        api.authAPI.login(credentials).then((res) => {
            hashHistory.push('/app');
            dispatch({type: LOGGED_IN, user: res.user, token: res.token});
            ping()(dispatch, state, api);
        }, (res) => {
            const error = res && res.response && res.response.data ? res.response.data.message : '';
            dispatch({type: LOGIN_FAILED, error: 'Failed to login. ' + error});
        });
    };
}

export function logout() {
    return (dispatch, state, api) => {
        api.authAPI.logout().then(() => {
            clearInterval(interval);
            dispatch({type: LOGGED_OUT});
            hashHistory.push('/login');
        }, (res) => {

        });
    }
}

let interval;
export function ping(force) {
    return (dispatch, state, api) => {
        if (!force && interval) {
            return;
        }

        api.authAPI.ping().then((res) => {
            dispatch({type: PING, user: res.user, date: res.date});
        });
        if (!force) {
            interval = setInterval(() => {
                api.authAPI.ping().then((res) => {
                    dispatch({type: PING, user: res.user, date: res.date});
                });
            }, 30 * 1000);
        }
    }
}*/
