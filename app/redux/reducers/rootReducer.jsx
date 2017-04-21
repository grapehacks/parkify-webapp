import { combineReducers } from 'redux'
import subscribeReducer from './subscribeReducer.jsx'
import authReducer from './authReducer.jsx'
import messagesReducer from './messagesReducer.jsx'
import historyReducer from './historyReducer'
import manageUsersReducer from './manageUsersReducer'
import manageCardsReducer from './manageCardsReducer'

const rootReducer = combineReducers({
    subscribe: subscribeReducer,
    auth: authReducer,
    messages: messagesReducer,
    history: historyReducer,
    manageUsers: manageUsersReducer,
    manageCards: manageCardsReducer
});

export default rootReducer;