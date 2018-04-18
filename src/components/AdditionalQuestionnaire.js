import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAdditionalQuestions } from './../actions/actions';
import { setAdditionalQuestionsAnswer } from './../actions/actions';

function AdditionalQuestions(props) {

    const propsQuestions = props.questions;
    const currentValues = props.currentValues;


    const questions = propsQuestions.map((question) => {
        if (Object.keys(currentValues).length > 0) {
            return (
                <div class="row" key={question.id} >
                    <div class="col-lg-12">
                        <p> {question.question} </p>
                    </div>
                    <div class="col-lg-12">
                        <input type="text" name="answer" onChange={(e) => props.handleAnswer(question.id, e)} value={currentValues[question.id]} />
                    </div>
                    <br />
                </div>
            );
        } else {
            return (
                <div class="row" key={question.id} >
                    <div class="col-lg-12">
                        <p> {question.question} </p>
                    </div>
                    <div class="col-lg-12">
                        <input type="text" name="answer" onChange={(e) => props.handleAnswer(question.id, e)} />
                    </div>
                    <br />
                </div>
            );

        }

    });

    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <label> Additional Questions: </label>
                </div>
                <br />
            </div>
            {questions}
        </div>
    );
}

class AdditionalQuestionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            additionalQuestions: this.props.additionalQuestions,
            answers: this.props.additionalQuestionAnswers
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(getAdditionalQuestions());
    }
    componentDidUpdate() {
        if (!(this.state.additionalQuestions == this.props.additionalQuestions)) {
            this.setState({
                additionalQuestions: this.props.additionalQuestions
            });
        }
    }

    handleAnswer(questionId, e) {
        const target = e.target;
        const value = target.value;

        var currentAnswer = this.state.answers;
        currentAnswer[questionId] = value;
        this.setState({
            answers: currentAnswer
        });

    }
    handleSubmit(e) {
        const target = e.target;
        const name = target.name;

        if (name == "next") {
            this.props.dispatch(setAdditionalQuestionsAnswer(this.state.answers));
            this.props.history.push('/ExtraInfo');

        } else if (name == "back") {
            this.props.history.push('/CreditCardQuestionnaire');
        }
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <AdditionalQuestions questions={this.state.additionalQuestions} handleAnswer={this.handleAnswer} currentValues={this.state.answers} />
                {/* <div class="row">
                    <br />
                    <br />
                    <br />
                    <div class="col-lg-4">
                        <button name="back" type="button" class="btn btn-primary btn-sm" onClick={this.handleSubmit}>Back</button>
                    </div>
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                        <button name="next" type="submit" class="btn btn-primary btn-sm pull-right" onClick={this.handleSubmit} >Next</button>
                    </div>
                </div> */}
            </div>
        );
    }
}

function select(store) {
    return {
        additionalQuestions: store.additionalQuestions,
        additionalQuestionAnswers: store.additionalQuestionAnswers
    }
}

export default connect(select)(AdditionalQuestionnaire);