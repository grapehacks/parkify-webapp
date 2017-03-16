import {GET_MESSAGES, GOT_MESSAGES, GET_MESSAGES_ERROR, MARKED_AS_READ} from './actionTypes';

export const getMessages = () => ({
    type: GET_MESSAGES
});

export const getMessages = ({messages}) => ({
    type: GOT_MESSAGES,
    messages
});

export const getMessagesError = ({error}) => ({
    type: GET_MESSAGES_ERROR,
    error: 'Failed to retrieve messages. ' + error
});

export const markAsRead = ({message}) => ({
    type: MARKED_AS_READ,
    message
});


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