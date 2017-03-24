import { combineReducers } from 'redux'
import subscribeReducer from './subscribeReducer.jsx'
import authReducer from './authReducer.jsx'
import messagesReducer from './messagesReducer.jsx'
import historyReducer from './historyReducer'
import manageUsersReducer from './manageUsersReducer'

const rootReducer = combineReducers({
    subscribe: subscribeReducer,
    auth: authReducer,
    messages: messagesReducer,
    history: historyReducer,
    manageUsers: manageUsersReducer
});

export default rootReducer;