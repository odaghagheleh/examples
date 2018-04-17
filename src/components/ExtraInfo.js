import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setExtraInfo } from './../actions/actions';

function ExtraInfoInput(props) {

    const propsQuestions = props.questions;
    const currentValue = props.currentValue;

    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <label> Extra Info: </label>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <p>3. Is there anything else you'd like to tell us about this dispute? </p>
                    <textarea class="form-control" rows="3" name="usertext" placeholder="Type here..." onChange={props.handleAnswer} value={currentValue} ></textarea>
                </div>
                <br />
            </div>
        </div>
    );

}

class ExtraInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: this.props.extraInfos
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(e) {
        const target = e.target;
        const value = target.value;

        this.setState({
            answers: value
        });

    }
    handleSubmit(e) {
        const target = e.target;
        const name = target.name;

        if (name == "next") {
            this.props.dispatch(setExtraInfo(this.state.answers));
            this.props.history.push('/DisputeConfirmation');
        } else if (name == "back") {
            this.props.history.push('/AdditionalQuestionnaire');
        }
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div class="container">
                        <br />
                        <br />
                        <br />
                        <br />
                        <ExtraInfoInput handleAnswer={this.handleAnswer} currentValue={this.state.answers} />
                        <div class="row">
                            <br />
                            <br />
                            <br />
                            <div class="col-lg-4">
                                <button name="back" type="button" class="btn btn-primary btn-sm" onClick={this.handleSubmit}>Back</button>
                            </div>
                            <div class="col-lg-4">
                            </div>
                            <div class="col-lg-4">
                                <button name="next" type="button" class="btn btn-primary btn-sm" onClick={this.handleSubmit} >Next</button>
                            </div>
                        </div>
                    </div>
                </div>
                {console.log(this.props.extraInfos)}
            </div>
        );
    }
}

function select(store) {
    return {
        extraInfos: store.extraInfos
    }
}

export default connect(select)(ExtraInfo);