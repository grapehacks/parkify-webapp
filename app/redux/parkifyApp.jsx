import { combineReducers } from 'redux'
import subscribeReducer from './reducers/subscribeReducer.jsx'

const parkifyApp = combineReducers({
    subscribeState: subscribeReducer
});

export default parkifyApp;