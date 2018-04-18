import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setExtraInfo } from './../actions/actions';

function ExtraInfoInput(props) {

    const propsQuestions = props.questions;
    const currentValue = props.currentValue;

    return (
        <div>
            <textarea class="form-control" rows="3" name="usertext" placeholder="Type here..." onChange={props.handleAnswer} value={currentValue} ></textarea>
        </div>
    );

}

class ExtraInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers: this.props.extraInfos
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(e) {
        const target = e.target;
        const value = target.value;

        this.setState({
            answers: value
        });
        this.props.dispatch(setExtraInfo(this.state.answers));

    }

    render() {
        return (
            <div>
                <br />
                <div class="row">
                    <div class="col-lg-8">
                        <label>3. Is there anything else you'd like to tell us about this dispute? </label>
                        <ExtraInfoInput handleAnswer={this.handleAnswer} currentValue={this.state.answers} />
                    </div>
                    <br />
                </div>
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