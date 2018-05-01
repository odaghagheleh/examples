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

class DecisionQuestionApp extends Component {
    constructor(props) {
        super(props);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    }
    componentWillMount() {
        this.props.getDisputeReasonQuestions();
    }

    handleSelectAnswer(e) {
        //this.props.jumpToStep();
        this.props.setDisputeReasonAnswer(e.target.value)
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
                        {showAndHide(this.props.transactionDisputeReasonAnswers, this.props)}
                    </div>
                </div>
            </div>
        ); 
        
    }
}

function showAndHide(transactionDisputeReasonAnswers, props) {
    if (transactionDisputeReasonAnswers == 'I did not authorize the transaction(s)') {
        return (
            <div>

                <br />

                Due to strict security and privacy regulations, we must cancel your credit card and issue a new one. Please confirm.
            <br /><br /><br />
                <input name="yes" type="button" className="btn btn-sm  btn-primary neibourb" onClick={() => props.jumpToStep(2)} value="Confirm - Reissue Card" />
                <input name="yes" type="button" className="btn btn-sm neibourb" value="No - Cancel" />

            </div>
        )
    } else {
        if(transactionDisputeReasonAnswers != '')
        return (
            <div>
                            
{props.jumpToStep(4)}
            </div>
        )
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