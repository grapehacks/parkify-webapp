import {GET_MESSAGES, GOT_MESSAGES, GET_MESSAGES_ERROR} from '../actions/messagesActions.jsx'

const initialState = {
    messages: [],
    gettingMessages: false,
    error: ''
};

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
/*        case MARK_AS_READ:
            return Object.assign({}, state, {
                markingMessagesRead: true,
                error: '',
            });
        case MARKED_AS_READ:
            return Object.assign({}, state, {
                markingMessagesRead: false,
                error: '',
            });
*/
        default:
            return state
    }
}

