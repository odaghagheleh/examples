import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepZilla from '../steps/main';
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

class DecisionQuestionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    }
    componentWillMount() {
        this.props.getDisputeReasonQuestions();
    }

    handleSelectAnswer(e) {
        //this.props.jumpToStep();
        const value = e.target.value;
        this.props.setDisputeReasonAnswer(value);
        // if (value != 'I did not authorize the transaction(s)') {
        //     this.props.jumpToStep(4);
        // }
    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="sel">1. Why are you disputing these transactions?</label>
                        <br />
                        <QuestionsApp questions={this.props.transactionDisputeReasonQuestions} handleSelectAnswer={this.handleSelectAnswer} selectValue={this.props.transactionDisputeReasonAnswers} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        {
                            this.props.transactionDisputeReasonAnswers == 'I did not authorize the transaction(s)' ?
                                <div>
                                    <br />
                                    <p>Due to strict security and privacy regulations, we must cancel your credit card and issue a new one. Please confirm.</p>
                                    <input name="yes" type="button" className="btn btn-sm  btn-primary neibourb" onClick={() => this.props.jumpToStep(2)} value="Confirm - Reissue Card" />
                                    <input name="no" type="button" className="btn btn-sm neibourb" value="No - Cancel" onClick={() => this.props.jumpToStep(0)}/>
                                </div>
                                : <div> <br />
                                    <div className="row">
                                        <button name="prev" type="button" className="btn btn-primary btn-sm pull-left stepZillLeftabt" onClick={() => this.props.jumpToStep(0)} >Prev</button>
                                        <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(4)} >Next</button>
                                    </div></div>
                        }
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


// props.jumpToStep(4)