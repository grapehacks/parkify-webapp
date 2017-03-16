import { combineReducers } from 'redux'
import subscribeReducer from './subscribeReducer.jsx'
import authReducer from './authReducer.jsx'
import messagesReducer from './messagesReducer.jsx'

const rootReducer = combineReducers({
    subscribe: subscribeReducer,
    auth: authReducer,
    messages: messagesReducer
});

export default rootReducer;