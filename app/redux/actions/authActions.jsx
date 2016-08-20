/*
 * action types
 */
import {hashHistory} from 'react-router';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const PING = 'PING';

/*
 * action creators
 */
/*eslint-disable*/
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
            dispatch({type: LOGGED_OUT});
            hashHistory.push('/login');
        }, (res) => {

        });
    }
}

let interval;
export function ping() {
    return (dispatch, state, api) => {
        if (interval) {
            return;
        }

        api.authAPI.ping().then((res) => {
            dispatch({type: PING, user: res.user, date: res.date});
        });
        interval = setInterval(() => {
            api.authAPI.ping().then((res) => {
                dispatch({type: PING, user: res.user, date: res.date});
            });
        }, 30 * 1000);
    }
}