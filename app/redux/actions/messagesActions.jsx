/*
 * action types
 */
export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_FAILED = 'LOGIN_FAILED';

/*
 * action creators
 */
/*eslint-disable*/
export function getMessages() {
    //przerobić!
    return (dispatch, state, api) => {
        dispatch({type: LOGGING_IN});
        api.messagesAPI.getMessages().then((res) => {
            dispatch({type: LOGGED_IN, user: res.user, token: res.token});
        }, (res) => {
            const error = res && res.response && res.response.data ? res.response.data.message : '';
            dispatch({type: LOGIN_FAILED, error: 'Failed to login. ' + error});
        });
    };
}

//add mark as read etc...