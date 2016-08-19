/*
 * action types
 */
import {hashHistory} from 'react-router';
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
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
            dispatch({type: LOGIN_FAILED, error: 'Failed to login. ' + res.response.data.message});
        });
    };
}