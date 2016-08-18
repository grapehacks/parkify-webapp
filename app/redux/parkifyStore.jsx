import { createStore, applyMiddleware } from 'redux';
import parkifyApp from './parkifyApp.jsx'
import thunk from 'redux-thunk';
import api from '../config/api.jsx';

let store = createStore(
    parkifyApp,
    applyMiddleware(thunk.withExtraArgument(api))
);

module.exports = store;