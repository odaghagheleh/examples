import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getDisputeReasonQuestions, setDisputeReasonAnswer } from './../actions/actions';


const QuestionsApp = props => {
    const questionList = props.questions;
    const selectItem = questionList.map((qtem) =>
        <option key={qtem.id} value={qtem.question}>{qtem.question}</option>
    );
    return (
        <select id="sel" className="form-control" value={props.selectValue} onChange={props.handleSelectAnswer} >
            {selectItem}
        </select>
    );
}

class DecisionQuestionApp extends Component {
    componentWillMount() {
        this.props.getDisputeReasonQuestions();
    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="sel">1. Why are you disputing these transactions?</label>
                        <br />
                        <QuestionsApp questions={this.props.transactionDisputeReasonQuestions} handleSelectAnswer={(e) => this.props.setDisputeReasonAnswer(e.target.value)} selectValue={this.props.transactionDisputeReasonAnswers} />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        transactionDisputeReasonQuestions: state.transactionDisputeReasonQuestions,
        transactionDisputeReasonAnswers: state.transactionDisputeReasonAnswers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getDisputeReasonQuestions: () => {
            dispatch(getDisputeReasonQuestions());
        },
        setDisputeReasonAnswer: (payload) => {
            dispatch(setDisputeReasonAnswer(payload));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DecisionQuestionApp);