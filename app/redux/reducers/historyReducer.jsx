import { FETCH_LAST_DRAW_SUCCESS, FETCH_LAST_DRAW_FAILED } from '../actions/actionTypes'

const initialState = {
    lastDraw: {},
    error: ''
};

export default function historyReducer(state = initialState, action = undefined) {
    if(action === undefined) {
        return state;
    }

    switch (action.type) {
        case FETCH_LAST_DRAW_SUCCESS:
            return Object.assign({}, state, {
                lastDraw: action.payload.lastDraw,
                error: ''
            });
        case FETCH_LAST_DRAW_FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state
    }
}

