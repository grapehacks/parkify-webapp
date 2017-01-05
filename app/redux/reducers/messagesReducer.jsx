import {GET_MESSAGES, GOT_MESSAGES, GET_MESSAGES_ERROR, MARKING_AS_READ, MARKED_AS_READ} from '../actions/messagesActions.jsx'

const initialState = {
    messages: [],
    gettingMessages: false,
    markingRead: false,
    error: ''
};
/*eslint-disable*/
export default function messagesReducer(state = initialState, action = undefined) {
    switch (action.type) {
        //Markin_as_read, getting_messages etc
        case GET_MESSAGES:
            return Object.assign({}, state, {
                gettingMessages: true,
                error: '',
            });
        case GOT_MESSAGES:
            return Object.assign({}, state, {
                gettingMessages: false,
                error: '',
                messages: action.messages
            });
        case GET_MESSAGES_ERROR:
            return Object.assign({}, state, {
                gettingMessages: false,
                error: '',
            });
        case MARKING_AS_READ:
            return Object.assign({}, state, {
                markingRead: true
            });
        case MARKED_AS_READ:
            let index = state.messages.indexOf(state.messages.filter(m => m._id === action.message._id)[0]);
            let messages = state.messages.slice(0, index);
            messages.push(action.message);
            messages = messages.concat(state.messages.slice(index + 1));

            return Object.assign({}, state, {
                messages,
                markingRead: false
            });
        default:
            return state
    }
}

