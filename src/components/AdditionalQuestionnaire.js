import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAdditionalQuestions } from './../actions/actions';
import { setAdditionalQuestionsAnswer } from './../actions/actions';

function AdditionalQuestions(props) {

    const propsQuestions = props.questions;

    if (propsQuestions.length > 0) {

        const questions = propsQuestions.map((question) =>

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

        return (
            <div class="container">
                <br />
                <br />
                <br />
                <div class="row">
                    <div class="col-lg-12">
                        <label> Additional Questions: </label>
                    </div>
                    <br />
                </div>
                {questions}
                <div class="row">
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-4">
                        <button name="next" type="submit" class="btn btn-primary btn-sm" onClick={props.handleSubmit} >Next</button>
                    </div>
                </div>
            </div>
        );

    } else {
        return (
            <div class="container">
            </div>
        );
    }
}

class AdditionalQuestionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }
    componentWillMount() {
        this.props.dispatch(getAdditionalQuestions());
    }

    handleAnswer(questionId, e) {
        const target = e.target;
        const value = target.value;

        // console.log(questionId+" "+value);
        var currentAnswer = this.state.answers;
        currentAnswer[questionId] = value;
        this.setState({
            answers: currentAnswer
        });

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(setAdditionalQuestionsAnswer(this.state.answers));
        this.props.history.push('/ExtraInfoInput');
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <AdditionalQuestions questions={this.props.additionalQuestions} handleAnswer={this.handleAnswer} handleSubmit={this.handleSubmit} />
                </div>
                {console.log(this.props.additionalQuestionAnswers)}
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