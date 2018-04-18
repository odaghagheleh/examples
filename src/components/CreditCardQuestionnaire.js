import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCreditCardQuestionAnswer } from './../actions/actions';

function CreditCardQuestions(props) {
    var currentValues = props.currentValues;
    const yesBt = currentValues.creditCardwithCustomer == "Yes" ?
        <input name="yes" type="button" class="btn btn-sm active" onClick={props.handleUserAnswer} value="Yes" /> :
        <input name="yes" type="button" class="btn btn-sm" onClick={props.handleUserAnswer} value="Yes" />;

    const noBt = currentValues.creditCardwithCustomer == "No" ?
        <input name="no" type="button" class="btn btn-primary btn-sm active" onClick={props.handleUserAnswer} value="No" /> :
        <input name="no" type="button" class="btn btn-primary btn-sm" onClick={props.handleUserAnswer} value="No" />;
    return (
        <div>
            <br />
            <div class="row">
                <div class="col-lg-12">
                    <label>2. Has your credit card been with you the entire time?</label>
                </div>
            </div>
            <div class="row">
                <div class="form-inline">
                    <div class="form-group col-sm-1">
                        {yesBt}
                    </div>
                    <div class="form-group">
                        {noBt}
                    </div>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="form-inline col-lg-12">
                    <div class="form-group">
                        <label>When was your Credit Card last in your posession?</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <p>what date did you realize the card(s) were missing?</p>
                </div>
                <div class="col-lg-4">
                    <input type="date" name="missingDate" onChange={props.handleUserAnswer} value={currentValues.missingDate} />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <p>What date did you last use the card?</p>
                </div>
                <div class="col-lg-4">
                    <input type="date" name="lastUsedDate" onChange={props.handleUserAnswer} value={currentValues.lastUsedDate} />
                </div>
            </div>
        </div>
    );
}

class CreditCardQuestionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: this.props.creditCardQAs
        }
        this.handleUserAnswer = this.handleUserAnswer.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserAnswer(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        var currentUserAnswer = this.state.userAnswer;

        switch (name) {
            case "yes":
                currentUserAnswer["creditCardwithCustomer"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                break;
            case "no":
                currentUserAnswer["creditCardwithCustomer"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                break;
            case "missingDate":
                currentUserAnswer["missingDate"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                break;
            case "lastUsedDate":
                currentUserAnswer["lastUsedDate"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                break;
        }
    }
    // componentWillUnmount() {

    // this.props.dispatch(addCreditCardQuestionAnswer(this.state.userAnswer));

    // }

    // handleSubmit(e) {
    //     const target = e.target;
    //     const name = target.name;

    //     if (name == "next") {
    //         // if (Object.keys(this.state.userAnswer).length < 3) {
    //         //     alert("Please answer all questions");
    //         // } else {
    //         // this.props.dispatch(addCreditCardQuestionAnswer(this.state.userAnswer));
    //         this.props.history.push('/AdditionalQuestionnaire');

    //         // }

    //     } else if (name == "back") {
    //         this.props.history.push('/DecisionQuestionApp');
    //     }

    // }

    render() {
        return (
            <div>
                <CreditCardQuestions handleUserAnswer={this.handleUserAnswer} currentValues={this.state.userAnswer} />
                <br />
            </div>
        );
    }
}

function select(store) {
    return {
        creditCardQAs: store.creditCardQAs
    }
}
export default connect(select)(CreditCardQuestionnaire);