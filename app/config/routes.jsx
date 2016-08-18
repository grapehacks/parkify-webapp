import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Main from './../components/Main.jsx';
import Home from './../components/Home.jsx';
import Users from './../components/Users.jsx';


let routes = (
    <Router history={hashHistory}>
        <Route component={Main}>
            <Route path='/' component={Home}/>
            <Route path='/users' component={Users}/>
        </Route>
    </Router>
);

module.exports = routes;