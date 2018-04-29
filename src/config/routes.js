import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TransactionHistoryApp from './../components/TransactionHistoryApp';
import MainForm from './../components/MainForm'

import DisputeCreditTransaction from './../components/DisputeCreditTransaction';
import DecisionQuestionApp from './../components/DecisionQuestionApp';
import CreditCardQuestionnaire from './../components/CreditCardQuestionnaire';
import AdditionalQuestionnaire from './../components/AdditionalQuestionnaire';
import ExtraInfo from './../components/ExtraInfo';
import DisputeConfirmation from './../components/DisputeConfirmation';
import Confirmed from './../components/Confirmed';
import Greeting from './../components/Greating';


export default (
    <Switch>
        <Route exact path='/' component={TransactionHistoryApp} />
        <Route exact path='/MainForm' component={MainForm} />

        <Route exact path='/DisputeCreditTransaction' component={DisputeCreditTransaction} />
        <Route exact path='/DecisionQuestionApp' component={DecisionQuestionApp} />
        <Route exact path='/CreditCardQuestionnaire' component={CreditCardQuestionnaire} />
        <Route exact path='/AdditionalQuestionnaire' component={AdditionalQuestionnaire} />
        <Route exact path='/ExtraInfo' component={ExtraInfo} />
        <Route exact path='/DisputeConfirmation' component={DisputeConfirmation} />
        <Route exact path='/Confirmed' component={Confirmed} />
        <Route exact path='/Greeting' component={Greeting} />
    </Switch>

);