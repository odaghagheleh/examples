import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAdditionalQuestions } from './../actions/actions';
import { setAdditionalQuestionsAnswer } from './../actions/actions';

const AdditionalQuestions = props => {

    const propsQuestions = props.questions;
    const currentValues = props.currentValues;


    const questions = propsQuestions.map((question) => {
        return (
            <div className="row" key={question.id} >
                <div className="col-lg-3">
                    <p> {question.question} </p>
                </div>
                <div className="col-lg-4">
                    <input type="text" name="answer" onChange={(e) => props.handleAnswer(question.id, e)} value={currentValues[question.id]} />
                </div>
                <br />
            </div>
        );
    });

    return (
        <div>
            {questions}
        </div>
    );
}

class AdditionalQuestionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            additionalQuestionAnswers: this.props.additionalQuestionAnswers
        }
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    componentWillMount() {
        this.props.getAdditionalQuestions();
    }

    handleAnswer(questionId, e) {
        const target = e.target;
        const value = target.value;

        var currentAnswer = this.props.additionalQuestionAnswers;
        currentAnswer[questionId] = value;
        this.setState({
            additionalQuestionAnswers: currentAnswer
        });
        this.props.setAdditionalQuestionsAnswer(this.state.additionalQuestionAnswers);


    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                    <div className="col-lg-12">
                        <label> Additional Questions: </label>
                    </div>
                    <br />
                    <br />
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <AdditionalQuestions questions={this.props.additionalQuestions} handleAnswer={this.handleAnswer} currentValues={this.props.additionalQuestionAnswers} />
                    </div>
                </div>

                <div className="row">
                    <button name="prev" type="button" className="btn btn-primary btn-sm pull-left stepZillLeftabt" onClick={() => this.props.jumpToStep(2)} >Prev</button>
                    <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(4)} >Next</button>
                </div>
            </div>
        );
    }
}

// function select(store) {
//     return {
//         additionalQuestions: store.additionalQuestions,
//         additionalQuestionAnswers: store.additionalQuestionAnswers
//     }
// }

const mapStateToProps = state => {
    return {
        additionalQuestions: state.additionalQuestions,
        additionalQuestionAnswers: state.additionalQuestionAnswers
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getAdditionalQuestions: () => {
            dispatch(getAdditionalQuestions());
        },
        setAdditionalQuestionsAnswer: (payload) => {
            dispatch(setAdditionalQuestionsAnswer(payload));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalQuestionnaire);