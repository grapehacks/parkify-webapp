/*
 * action types
 */
export const GET_MESSAGES = 'GET_MESSAGES';
export const GOT_MESSAGES = 'GOT_MESSAGES';
export const GET_MESSAGES_ERROR = 'GET_MESSAGES_ERROR';
export const MARKED_AS_READ = 'MARKED_AS_READ';
export const MARKING_AS_READ = 'MARKING_AS_READ';

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
        dispatch({type: MARKING_AS_READ});
        api.messagesAPI.markAsRead(message._id).then((res) => {
            setTimeout(() => {
                // delayed dispatch for extended css effect
                dispatch({type: MARKED_AS_READ, message: res.data});
            }, 500);
        }, (res) => {
            console.log(res);
        });
    }
}