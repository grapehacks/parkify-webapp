import {GET_MESSAGES_START, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILED, MARKED_AS_READ, MARK_AS_READ_FAILED} from '../actions/actionTypes'

const initialState = {
    messages: [],
    gettingMessages: false,
    error: ''
};
/*eslint-disable*/
export default function messagesReducer(state = initialState, action = undefined) {
    if(action === undefined) {
        return state;
    }

    switch (action.type) {
        //Markin_as_read, getting_messages etc
        case GET_MESSAGES_START:
            return Object.assign({}, state, {
                gettingMessages: true,
                error: ''
            });
        case GET_MESSAGES_SUCCESS:
            return Object.assign({}, state, {
                gettingMessages: false,
                error: '',
                messages: action.payload.messages
            });
        case GET_MESSAGES_FAILED:
            return Object.assign({}, state, {
                gettingMessages: false,
                error: action.payload.error
            });
        case MARKED_AS_READ:
            let index = state.messages.indexOf(state.messages.filter(m => m._id === action.payload.message._id)[0]);
            let messages = state.messages.slice(0, index);
            messages.push(action.payload.message);
            messages = messages.concat(state.messages.slice(index + 1));

            return Object.assign({}, state, {
                messages
            });
        case MARK_AS_READ_FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state
    }
}

