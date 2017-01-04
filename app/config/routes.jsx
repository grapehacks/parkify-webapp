import React from 'react';
import {Router, Route, hashHistory, IndexRedirect, Redirect} from 'react-router';
import RefreshableMain from './../containers/RefreshableMain';
import Home from './../components/Home.jsx';
import Settings from './../components/Settings.jsx';
import Messages from './../components/Messages.jsx';
import Login from './../components/Login.jsx';
/*eslint-disable*/
function requireAuth(nextState, replace) {
    //TODO: Uncomment content below to support redirecting to /login
    if (localStorage.getItem('authenticated') !== 'true') {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

function checkIfLogged(nextState, replace) {
    if (localStorage.getItem('authenticated') === 'true') {
        replace({
            pathname: '/app',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

let routes = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path='/app' component={RefreshableMain}>
                <IndexRedirect to="/app/home"/>
                <Route path='/app/home' component={Home} onEnter={requireAuth}/>
                <Route path='/app/settings' component={Settings} onEnter={requireAuth}/>
                <Route path='/app/messages' component={Messages} onEnter={requireAuth}/>
            </Route>
            <Route path="/login" component={PLogin} onEnter={checkIfLogged}/>
            <IndexRedirect to='/login' />
            <Redirect from="*" to='/app' />
        </Route>
    </Router>
);

export default routes;