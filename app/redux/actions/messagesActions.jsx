/*
 * action types
 */
export const GET_MESSAGES = 'GET_MESSAGES';
export const GOT_MESSAGES = 'GOT_MESSAGES';
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR';

/*
 * action creators
 */
/*eslint-disable*/
export function getMessages() {
    return (dispatch, state, api) => {
        dispatch({type: GET_MESSAGES});
        api.messagesAPI.getMessages().then((res) => {
            dispatch({type: GOT_MESSAGES, messages: res});
        }, (res) => {
            const error = res && res.response && res.response.data ? res.response.data.message : '';
            dispatch({type: GET_MESSAGES_ERROR, error: 'Failed to retrieve messages. ' + error});
        });
    };
}

//add mark as read etc...