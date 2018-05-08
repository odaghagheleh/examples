/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepZilla from '../steps/main';
import { getDisputeReasonQuestions, setDisputeReasonAnswer } from './../actions/actions';

import Select from 'react-select';
import 'react-select/dist/react-select.css';


const QuestionsApp = props => {
    const questionList = props.questions;
    var selectData = [];
    var selectedValue={};
    const selectItem = questionList.map((qtem) =>{
        selectData.push({label:qtem.question, value:qtem.id})

        if(props.selectValue.length > 0){
            if(qtem.question == props.selectValue){
                selectedValue = {label:qtem.question, value:qtem.id};
            }

        } else{
            selectedValue = {label:"Select an answer...", value:"100"};
        }
    });
    {/* <option key={qtem.id} value={qtem.question}>{qtem.question}</option> */}

    return (
        <div className="DecisionQuestionApp__select">
            <Select id="sel" className="DecisionQuestionApp__select--width" placeholder="Select an answer..."
             value={selectedValue} onChange={props.handleSelectAnswer} options={selectData} 
            />
            
                {/* <option disabled selected value=''>Select an answer...</option>
                {selectItem} */}
            {/* </Select> */}
        </div>
    );
}

class DecisionQuestionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmCheck: false
        }
        this.confirmed = this.confirmed.bind(this);
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
    }
    componentWillMount() {
        this.props.getDisputeReasonQuestions();
    }

    handleSelectAnswer(selectedOption) {
        //this.props.jumpToStep();
        // const value = e.target.value;
        this.props.setDisputeReasonAnswer(selectedOption.label);
        // if (value != 'I did not authorize the transaction(s)') {
        //     this.props.jumpToStep(4);
        // }
    }

    confirmed() {
        var jsonObj = this.state;
        jsonObj.confirmCheck = true;
        this.setState({
            jsonObj
        });
    }

    buttonActive(confirm, currentAnswer) {


        if (currentAnswer != 'I did not authorize the transaction(s)' && currentAnswer !== '') {
            return (
                <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(4)} >
                    Next</button>
            )

        } else if (currentAnswer == 'I did not authorize the transaction(s)') {
            if (confirm === true) {
                return (
                    <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(2)} >
                        Next</button>
                )
            } else if (confirm === false) {
                return (
                    <button name="next" disabled type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(4)} >
                        Next</button>
                )
            }

        } else {
            return (
                <button name="next" disabled type="button" className="btn btn-default btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(4)} >
                    Next</button>
            )
        }
    }

    render() {
        return (
            <div className="DecisionQuestionApp">
                <br />
                <div className="row">
                    <p className="DecisionQuestionApp__question">Let us ask a few questions</p>
                    <div className="form-group col-sm-6">
                        <label className="DecisionQuestionApp__step" htmlFor="sel"><b>1. Why are you disputing these transactions?</b></label>
                        <br />
                        <QuestionsApp questions={this.props.transactionDisputeReasonQuestions} handleSelectAnswer={this.handleSelectAnswer} selectValue={this.props.transactionDisputeReasonAnswers} />
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.transactionDisputeReasonAnswers == 'I did not authorize the transaction(s)' ?
                            <div className="form-group col-sm-12 DecisionQuestionApp__spacer">
                                <p className="DecisionQuestionApp__cancel-credit">Due to strict security and privacy regulations, we must cancel your credit card and issue a new one. Please confirm.</p>
                                <input name="yes" type="button" className="btn DecisionQuestionApp__custom-buttons btn-primary neibourb" onClick={() => this.confirmed()} value="Confirm - Reissue Card" />
                                <input name="no" type="button" className="btn DecisionQuestionApp__custom-buttons neibourb btn-default" value="No - Cancel" onClick={() => this.props.history.push('/')} />
                            </div>
                            :
                            <div> </div>
                    }
                </div>
                <div className="row">
                    <button name="prev" type="button" className="btn btn-sm pull-right stepZillLeftabt" onClick={() => this.props.jumpToStep(0)} ><i class="fa fa-chevron-left"></i>

                    </button>
                    {this.buttonActive(this.state.confirmCheck, this.props.transactionDisputeReasonAnswers)}
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
