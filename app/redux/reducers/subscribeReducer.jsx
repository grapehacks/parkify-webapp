import { SUBSCRIBE, UNSUBSCRIBE, PROCESS } from '../actions/subscribeActions.jsx'

const initialState = {
    subscribed: false,
    processing: false
};

export default function subscribeReducer(state = initialState, action = undefined) {
    switch (action.type) {
        case SUBSCRIBE:
            return Object.assign({}, state, {
                subscribed: true,
                processing: false
            });
        case PROCESS:
            return Object.assign({}, state, {
                processing: true
            });
        case UNSUBSCRIBE:
            return Object.assign({}, state, {
                subscribed: false,
                processing: false
            });
        default:
            return state
    }
}

