import React, { Component } from 'react';
import { connect } from 'react-redux'


function QuestionsApp(props) {
    const questionList = props.questions;
    const selectItem = questionList.map((qtem) =>
        <option key={qtem.id} value={qtem.question}>{qtem.question}</option>
    )
    return (
        <div>
            <label>1. Why are you disputing these transactions?</label>
            <div class="form-group col-sm-4">
                <select class="form-control col-sm-12" >
                    {selectItem}
                </select>
            </div>
        </div>
    );
}

class DecisionQuestionApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.transactionDisputes,
            questions: [
                {
                    id: 1,
                    question: 'I cancelled ... '
                },
                {
                    id: 1,
                    question: 'I recieved incorrect ...'
                },
                {
                    id: 1,
                    question: 'I was charged ...'
                }
            ],
            answer: ""
        }
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <QuestionsApp questions={this.state.questions} />
                </div>
            </div>
        );
    }
}

function select(store) {
    return {
        transactionDisputes: store.transactionDisputes
    }
}
export default connect(select)(DecisionQuestionApp);