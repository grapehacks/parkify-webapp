/*
 * action types
 */

export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const SUBSCRIBE = 'SUBSCRIBE';
export const PROCESS = 'PROCESS';

/*
 * action creators
 */

export function subscribe(params) {
    return (dispatch, state, api) => {
        dispatch({type: PROCESS});
        api.subscriptionAPI.subscribe(params).then(() => {
            dispatch({type: SUBSCRIBE});
        });
    };
}

export function unsubscribe(params) {
    return (dispatch, state, api) => {
        dispatch({type: PROCESS});
        api.subscriptionAPI.unsubscribe(params).then(() => {
            dispatch({type: UNSUBSCRIBE});
        });
    };
}

