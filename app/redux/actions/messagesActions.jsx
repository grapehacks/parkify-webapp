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
