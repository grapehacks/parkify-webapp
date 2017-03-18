import {GET_MESSAGES, GET_MESSAGES_START, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILED, MARK_AS_READ, MARKED_AS_READ, MARK_AS_READ_FAILED} from './actionTypes';

export const getMessages = () => ({
    type: GET_MESSAGES
});

export const getMessagesStart = () => ({
    type: GET_MESSAGES_START
});

export const getMessagesSuccess = (payload) => ({
    type: GET_MESSAGES_SUCCESS,
    payload
});

export const getMessagesFailed = (payload) => ({
    type: GET_MESSAGES_FAILED,
    payload
});

export const markAsRead = (payload) => ({
    type: MARK_AS_READ,
    payload
});

export const markedAsRead = (payload) => ({
    type: MARKED_AS_READ,
    payload
});

export const markedAsReadFailed = (payload) => ({
    type: MARK_AS_READ_FAILED,
    payload
});


/*
/!*eslint-disable*!/
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
}*/
