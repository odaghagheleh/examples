import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from './../components/App';
import DisputeCreditTransaction from './../components/DisputeCreditTransaction';
import DecisionQuestionApp from './../components/DecisionQuestionApp';
import CreditCardQuestionnaire from './../components/CreditCardQuestionnaire';
import AdditionalQuestionnaire from './../components/AdditionalQuestionnaire';
import ExtraInfoInput from './../components/ExtraInfo';


export default (
    <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/DisputeCreditTransaction' component={DisputeCreditTransaction} />
        <Route exact path='/DecisionQuestionApp' component={DecisionQuestionApp} />
        <Route exact path='/CreditCardQuestionnaire' component={CreditCardQuestionnaire} />
        <Route exact path='/AdditionalQuestionnaire' component={AdditionalQuestionnaire} />
        <Route exact path='/ExtraInfoInput' component={ExtraInfoInput} />
    </Switch>

);