/*
 * action types
 */
import {hashHistory} from 'react-router';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAILED = 'LOGIN_FAILED';

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
        }, (res) => {
            const error = res && res.response && res.response.data ? res.response.data.message : '';
            dispatch({type: LOGIN_FAILED, error: 'Failed to login. ' + error});
        });
    };
}

export function logout() {
    return (dispatch, state, api) => {
        api.authAPI.logout().then((res) => {
            console.log(res);
            dispatch({type: LOGGED_OUT});
            hashHistory.push('/login');
        }, (res) => {
            console.log(res);
        });
    }
}