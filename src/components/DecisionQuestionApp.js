import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDisputeReasonQuestions, setDisputeReasonAnswer } from './../actions/actions';


function QuestionsApp(props) {
    const questionList = props.questions;
    const selectItem = questionList.map((qtem) =>
        <option key={qtem.id} value={qtem.question}>{qtem.question}</option>
    );
    return (
        <select id="sel" class="form-control" value={props.selectValue} onChange={props.handleSelectAnswer} >
            {selectItem}
        </select>
    );
}

class DecisionQuestionApp extends Component {
    constructor(props) {
        super(props);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(getDisputeReasonQuestions());
    }

    handleSelectAnswer(e) {
        const target = e.target;
        const value = target.value;
        this.props.dispatch(setDisputeReasonAnswer(value));
    }

    render() {
        return (
            <div>
                <br />
                <div class="row">
                    <div class="form-group col-sm-6">
                        <label for="sel">1. Why are you disputing these transactions?</label>
                        <br />
                        <QuestionsApp questions={this.props.transactionDisputeReasonQuestions} handleSelectAnswer={this.handleSelectAnswer} selectValue={this.props.transactionDisputeReasonAnswers} />
                    </div>
                </div>
                <br />
                <br />
                <br />
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