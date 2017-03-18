import {PROCESS, FAILED, SUBSCRIBE, UNSUBSCRIBE, UNSUBSCRIBE_SUCCESS, SUBSCRIBE_SUCCESS} from './actionTypes';

export const process = () => ({
    type: PROCESS
});

export const failed = ({payload}) => ({
    type: FAILED,
    payload
});

export const subscribe = (payload) => ({
    type: SUBSCRIBE,
    payload
});

export const unsubscribe = (payload) => ({
    type: UNSUBSCRIBE,
    payload
});

export const subscribeSuccess = (payload) => ({
    type: SUBSCRIBE_SUCCESS,
    payload
});

export const unsubscribeSuccess = (payload) => ({
    type: UNSUBSCRIBE_SUCCESS,
    payload
});

