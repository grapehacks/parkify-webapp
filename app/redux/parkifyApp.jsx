import { combineReducers } from 'redux'
import subscribeReducer from './reducers/subscribeReducer.jsx'
import authReducer from './reducers/authReducer.jsx'

const parkifyApp = combineReducers({
    subscribeState: subscribeReducer,
    auth: authReducer
});

export default parkifyApp;