import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/rootReducer'
import rootSaga from './redux/sagas/rootSaga'

/* eslint-disable */
import styles from './style.scss';
/* eslint-enable */
import RefreshableMain from './containers/RefreshableMain';
import Home from './components/Home.jsx';
import Account from './containers/Account.jsx';
import Messages from './components/Messages.jsx';
import Login from './components/Login.jsx';

/* CREATING SAGA MIDDLEWARE AND STORE */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

/*eslint-disable*/
function requireAuth(nextState, replace) {
    const { auth } = store.getState();
    if (!auth.logged || !localStorage.getItem('token') || !localStorage.getItem('authenticated')) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

const App = () => (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path='/app' component={RefreshableMain} onEnter={requireAuth}>
                    <IndexRedirect to="/app/home"/>
                    <Route path='/app/home' component={Home} />
                    <Route path='/app/account' component={Account} />
                    <Route path='/app/messages' component={Messages} />
                </Route>
                <Route path="/login" component={Login}/>
                <IndexRedirect to="/login"/>
                <Redirect from="*" to='/app' />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));