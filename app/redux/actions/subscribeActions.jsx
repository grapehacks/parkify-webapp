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

