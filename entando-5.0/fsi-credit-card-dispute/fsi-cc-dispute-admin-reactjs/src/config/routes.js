import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import App from './../App';
import MyWorkListApp from './../components/MyWorkListApp';
import Tasks from './../components/Tasks';

export default (
    <Switch>
        <Route exact path='/' component={MyWorkListApp} />
        <Route exact path='/App' component={App} />
        <Route exact path='/Tasks' component={Tasks} />
    </Switch>

);