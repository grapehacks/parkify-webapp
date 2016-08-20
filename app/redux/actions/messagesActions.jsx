/*
 * action types
 */
export const GET_MESSAGES = 'GET_MESSAGES';
export const GOT_MESSAGES = 'GOT_MESSAGES';
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR';
export const MARKED_AS_READ = 'MARKED_AS_READ';

/*
 * action creators
 */
/*eslint-disable*/
export function getMessages() {
    return (dispatch, state, api) => {
        dispatch({type: GET_MESSAGES});
        api.messagesAPI.getMessages().then((res) => {
            dispatch({type: GOT_MESSAGES, messages: res.data});
        }, (res) => {
            const error = res && res.response && res.response.data ? res.response.data.message : '';
            dispatch({type: GET_MESSAGES_ERROR, error: 'Failed to retrieve messages. ' + error});
        });
    };
}

export function markAsRead(message) {
    return (dispatch, state, api) => {
        api.messagesAPI.markAsRead(message._id).then((res) => {
            console.log(res);
            dispatch({type: MARKED_AS_READ, message: res.data});
        }, (res) => {
            console.log(res);
        });
    }
}
//add mark as read etc...