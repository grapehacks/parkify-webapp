import React from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Main from './../components/Main.jsx';
import Home from './../components/Home.jsx';
import Settings from './../components/Settings.jsx';
import Messages from './../components/Messages.jsx';
import Login from './../components/Login.jsx';

let routes = (
    <Router history={hashHistory}>
        <Route path="/">
            <Route path='/app' component={Main}>
                <IndexRedirect to="/app/home"/>
                <Route path='/app/home' component={Home}/>
                <Route path='/app/settings' component={Settings}/>
                <Route path='/app/messages' component={Messages}/>
            </Route>
            <Route path="/login" component={Login}/>
            <IndexRedirect to="/login"/>
        </Route>
    </Router>
);

export default routes;