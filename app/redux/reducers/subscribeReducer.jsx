import { SUBSCRIBE_SUCCESS, UNSUBSCRIBE_SUCCESS, PROCESS, FAILED } from '../actions/subscribeActions.jsx'

const initialState = {
    subscribed: false,
    processing: false
};

export default function subscribeReducer(state = initialState, action = undefined) {
    switch (action.type) {
        case SUBSCRIBE_SUCCESS:
            return Object.assign({}, state, {
                subscribed: true,
                processing: false
            });
        case PROCESS:
            return Object.assign({}, state, {
                processing: true
            });
        case UNSUBSCRIBE_SUCCESS:
            return Object.assign({}, state, {
                subscribed: false,
                processing: false
            });
        case FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state
    }
}

