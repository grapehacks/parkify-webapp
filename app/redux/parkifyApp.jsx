import { combineReducers } from 'redux'
import subscribeReducer from './reducers/subscribeReducer.jsx'
import authReducer from './reducers/authReducer.jsx'
import messagesReducer from './reducers/messagesReducer.jsx'

const parkifyApp = combineReducers({
    subscribeState: subscribeReducer,
    auth: authReducer,
    messages: messagesReducer
});

export default parkifyApp;