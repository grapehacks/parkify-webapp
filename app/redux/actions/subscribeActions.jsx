/*
 * action types
 */

export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const SUBSCRIBE = 'SUBSCRIBE';
export const PROCESS = 'PROCESS';

/*
 * action creators
 */

export function subscribe() {
    return (dispatch, state, api) => {
        dispatch({type: PROCESS});
        api.subscriptionAPI.subscribe().then(() => {
            dispatch({type: SUBSCRIBE});
        });
    };
}

export function unsubscribe() {
    return (dispatch, state, api) => {
        dispatch({type: PROCESS});
        api.subscriptionAPI.unsubscribe().then(() => {
            dispatch({type: UNSUBSCRIBE});
        });
    };
}