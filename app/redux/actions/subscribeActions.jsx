import {PROCESS, SUBSCRIBE, UNSUBSCRIBE} from './actionTypes';

export const process = () => ({
    type: PROCESS
});

export const subscribe = (payload) => ({
    type: SUBSCRIBE,
    payload
});

export const unsubscribe = (payload) => ({
    type: UNSUBSCRIBE,
    payload
});

/*

export function subscribe(params) {
    return (dispatch, state, api) => {
        dispatch({type: PROCESS});
        api.subscriptionAPI.subscribe(params).then((res) => {
            dispatch({type: SUBSCRIBE, user: res});
        });
    };
}

export function unsubscribe(params) {
    return (dispatch, state, api) => {
        dispatch({type: PROCESS});
        api.subscriptionAPI.unsubscribe(params).then((res) => {
            dispatch({type: UNSUBSCRIBE, user: res});
        });
    };
}
*/

