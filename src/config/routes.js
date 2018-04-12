import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './../components/App';
import DisputeCreditTransaction from './../components/DisputeCreditTransaction'
import DecisionQuestionApp from './../components/DecisionQuestionApp'


export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/DisputeCreditTransaction' component={DisputeCreditTransaction} />
        <Route exact path='/DecisionQuestionApp' component={DecisionQuestionApp} />
    </Switch>

);