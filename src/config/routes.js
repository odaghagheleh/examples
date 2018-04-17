import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import TransactionHistoryApp from './../components/TransactionHistoryApp';
import DisputeCreditTransaction from './../components/DisputeCreditTransaction';
import DecisionQuestionApp from './../components/DecisionQuestionApp';
import CreditCardQuestionnaire from './../components/CreditCardQuestionnaire';
import AdditionalQuestionnaire from './../components/AdditionalQuestionnaire';
import ExtraInfoInput from './../components/ExtraInfo';
import DisputeConfirmation from './../components/DisputeConfirmation';
import Confirmed from './../components/Confirmed';


export default (
    <Switch>
        <Route exact path='/' component={TransactionHistoryApp} />
        <Route exact path='/DisputeCreditTransaction' component={DisputeCreditTransaction} />
        <Route exact path='/DecisionQuestionApp' component={DecisionQuestionApp} />
        <Route exact path='/CreditCardQuestionnaire' component={CreditCardQuestionnaire} />
        <Route exact path='/AdditionalQuestionnaire' component={AdditionalQuestionnaire} />
        <Route exact path='/ExtraInfoInput' component={ExtraInfoInput} />
        <Route exact path='/DisputeConfirmation' component={DisputeConfirmation} />
        <Route exact path='/Confirmed' component={Confirmed} />
    </Switch>

);