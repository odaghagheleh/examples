import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCreditCardQuestionAnswer } from './../actions/actions';

function CreditCardQuestions(props) {
    return (
        <div class="container">
            <form>
                <br />
                <br />
                <br />
                <div class="row">
                    <div class="col-lg-12">
                        <label>2. Has your credit card been with you the entire time?</label>
                    </div>
                </div>
                <div class="row">
                    <div class="form-inline">
                        <div class="form-group col-sm-1">
                            <button name="yes" type="button" class="btn btn-primary btn-sm" onClick={props.handleUserAnswer} >Yes</button>
                        </div>
                        <div class="form-group">
                            <button name="no" type="button" class="btn btn-primary btn-sm" onClick={props.handleUserAnswer} >No</button>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="form-inline col-lg-12">
                        <div class="form-group">
                            <label>When was your Credit Card last in your posession</label>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="form-inline col-lg-12">
                        <div class="form-group">
                            <p>what date did you realize the card(s) were missing?</p>
                        </div>
                        <div class="form-group">
                            <input type="date" name="missingDate" onChange={props.handleCreditCardMissingDate} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-inline col-lg-12">
                        <div class="form-group">
                            <p>What date did you last use the card?</p>
                        </div>
                        <div class="form-group">
                            <input type="date" name="lastUsedDate" onChange={props.handleCreditCardLastUsed} />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                        <button name="next" type="submit" class="btn btn-primary btn-sm" onClick={props.handleSubmit} >Next</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

class CreditCardQuestionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: "",
            creditCardMissingDate: "",
            creditCardLastUsed: ""
        }
        this.handleUserAnswer = this.handleUserAnswer.bind(this);
        this.handleCreditCardMissingDate = this.handleCreditCardMissingDate.bind(this);
        this.handleCreditCardLastUsed = this.handleCreditCardLastUsed.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserAnswer(e) {
        this.setState({
            userAnswer: e.target.name
        });
    }
    handleCreditCardMissingDate(e) {
        this.setState({
            creditCardMissingDate: e.target.value
        });
    }
    handleCreditCardLastUsed(e) {
        this.setState({
            creditCardLastUsed: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        if ((this.state.userAnswer === "") || (this.state.creditCardMissingDate === "") || (this.state.creditCardLastUsed === "")) {
            alert("Please answer all questions");
        } else {

            var jsonData = {};
            jsonData['userAnswer'] = this.state.userAnswer;
            jsonData['creditCardMissingDate'] = this.state.creditCardMissingDate;
            jsonData['creditCardLastUsed'] = this.state.creditCardLastUsed;

            this.props.dispatch(addCreditCardQuestionAnswer(JSON.stringify(jsonData)));
            this.props.history.push('/AdditionalQuestionnaire');

        }
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <CreditCardQuestions handleUserAnswer={this.handleUserAnswer} handleCreditCardMissingDate={this.handleCreditCardMissingDate}
                        handleCreditCardLastUsed={this.handleCreditCardLastUsed} handleSubmit={this.handleSubmit} />
                </div>
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