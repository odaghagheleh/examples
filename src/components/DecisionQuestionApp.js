import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDisputeReasonQuestions, setDisputeReasonAnswer } from './../actions/actions';


function QuestionsApp(props) {
    const questionList = props.questions;
    const selectItem = questionList.map((qtem) =>
        <option key={qtem.id} value={qtem.question}>{qtem.question}</option>
    );
    return (
        <div>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="form-group col-sm-4">
                </div>
                <div class="form-group col-sm-4">
                    <label>1. Why are you disputing these transactions?</label>
                    <select class="form-control col-sm-12" value={props.selectValue} onChange={props.handleSelectAnswer} >
                        {selectItem}
                    </select>
                </div>
                <div class="form-group col-sm-4">
                </div>
            </div>
        </div>
    );
}

class DecisionQuestionApp extends Component {
    constructor(props) {
        super(props);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
        this.handleBt = this.handleBt.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(getDisputeReasonQuestions());
    }

    handleSelectAnswer(e) {
        const target = e.target;
        const value = target.value;
        this.props.dispatch(setDisputeReasonAnswer(value));
    }
    handleBt(e) {
        const target = e.target;
        const name = target.name;
        if (name == "next") {
            this.props.history.push('/CreditCardQuestionnaire');

        } else if (name == "back") {
            this.props.history.push('/DisputeCreditTransaction');

        }
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div class="container">
                        <QuestionsApp questions={this.props.transactionDisputeReasonQuestions} handleSelectAnswer={this.handleSelectAnswer} selectValue={this.props.transactionDisputeReasonAnswers} />
                        <div class="row">
                            <br />
                            <br />
                            <br />
                            <div class="col-lg-4">
                                <button name="back" type="button" class="btn btn-primary btn-sm" onClick={this.handleBt}>Back</button>
                            </div>
                            <div class="col-lg-4">
                            </div>
                            <div class="col-lg-4">
                                <button name="next" type="button" class="btn btn-primary btn-sm pull-right" onClick={this.handleBt}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function select(store) {
    return {
        transactionDisputeReasonQuestions: store.transactionDisputeReasonQuestions,
        transactionDisputeReasonAnswers: store.transactionDisputeReasonAnswers

    }
}
export default connect(select)(DecisionQuestionApp);