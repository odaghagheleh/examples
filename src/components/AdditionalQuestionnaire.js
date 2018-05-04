import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAdditionalQuestions } from './../actions/actions';
import { setAdditionalQuestionsAnswer } from './../actions/actions';

const AdditionalQuestions = props => {

    const propsQuestions = props.questions;
    const currentValues = props.currentValues;
    var myQuestions = [];
    var myIDs = [];

    const questions = propsQuestions.map((question) => {
        myQuestions.push(question.question);
        myIDs.push(question.id);
    }
  );

    function print(index) {
        if (index < 0) {
            index = 0;
            props.jumpToStep(2);
        }else if (index > myQuestions.length -1 && index != 0) {
            // when all the questions are done

            props.jumpToStep(4);
        }
        return (
            <div className="row" key={myIDs[index]} >
            <div className="DecisionQuestionApp__spacer">
                <div className="col-lg-5">
                    <p className="DecisionQuestionApp__quest-p"> {myQuestions[index]} </p>
                </div>
                <div className="col-lg-5">
                    <input type="text" name="answer" onChange={(e) => props.handleAnswer(myIDs[index], e)} value={currentValues[myIDs[index]]} />
                </div>
                </div>
                <br />
            </div>
        );

    }

    function goNext() {
        props.increment();
        var temp = props.counter;
        print(temp);
    }
    function goPrev() {
        props.decrement();
        var temp = props.counter;
        print(temp);
    }


    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    {questions}
                    {print(props.counter)}
                </div>
            </div>
            <div className="row">
                <button name="prev" type="button" className="btn btn-primary  pull-left stepZillLeftabt" onClick={() => goPrev()} >&lt;</button>
                <button name="next" type="button" className="btn btn-primary  pull-right stepZillRightabt" onClick={() => goNext()} >Next</button>
            </div>

        </div>
    );
}

class AdditionalQuestionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            additionalQuestionAnswers: this.props.additionalQuestionAnswers,
            counter: 0
        }
        this.handleAnswer = this.handleAnswer.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
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

    increment() {
        var jsonObj = this.state;
        jsonObj.counter = jsonObj.counter + 1;
        this.setState({
            jsonObj
        });
    }

    decrement() {
        var jsonObj = this.state;
        jsonObj.counter = jsonObj.counter - 1;
        this.setState({
            jsonObj
        });
    }

    render() {
        return (
            <div>
                <br />
                <div className="row">
                <p className="DecisionQuestionApp__question">Let us ask a few questions</p>
                    <div className="col-lg-12">
                        <label className="DecisionQuestionApp__step"> Additional Questions: </label>
                    </div>
                    <br />
                    <br />
                </div>
                <AdditionalQuestions jumpToStep={this.props.jumpToStep} increment={this.increment} decrement={this.decrement} counter={this.state.counter} questions={this.props.additionalQuestions} handleAnswer={this.handleAnswer} currentValues={this.props.additionalQuestionAnswers} />
            </div>
        );
    }
}

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
