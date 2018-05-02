import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCreditCardQuestionAnswer } from './../actions/actions';

const CreditCardQuestions = props => {
    var currentValues = props.currentValues;
    const yesBt = currentValues.creditCardwithCustomer === "Yes" ?
        <input name="yes" type="button" className="btn btn-sm  btn-primary neibourb active" onClick={props.handleUserAnswer} value="Yes" /> :
        <input name="yes" type="button" className="btn btn-sm neibourb" onClick={props.handleUserAnswer} value="Yes" />;

    const noBt = currentValues.creditCardwithCustomer === "No" ?
        <input name="no" type="button" className="btn btn-primary btn-sm neibourbt active" onClick={props.handleUserAnswer} value="No" /> :
        <input name="no" type="button" className="btn btn-sm neibourbt" onClick={props.handleUserAnswer} value="No" />;


    const showOrNot = () => {
        if (currentValues.creditCardwithCustomer === "Yes") {
            return (<div>
                <div className="row">
                    <div className="form-inline col-lg-12">
                        <div className="form-group">
                            <label>When was your Credit Card last in your posession?</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <p>What date did you realize the card(s) were missing?</p>
                    </div>
                    <div className="col-lg-4">
                        <input type="date" name="missingDate" onChange={props.handleUserAnswer} value={currentValues.missingDate} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <p>What date did you last use the card?</p>
                    </div>
                    <div className="col-lg-4">
                        <input type="date" name="lastUsedDate" onChange={props.handleUserAnswer} value={currentValues.lastUsedDate} />
                    </div>
                </div>
            </div>)
        } else {
            return (<div> </div>);
        }
    }


    return (
        <div>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <label>2. Has your credit card been with you the entire time?</label>
                </div>
            </div>
            <div className="row">
                <div className="form-inline col-lg-12">
                    <div className="form-group">
                        {yesBt}
                    </div>
                    <div className="form-group">
                        {noBt}
                    </div>
                </div>
            </div>
            <br />
            {showOrNot()}
        </div>
    );
}

class CreditCardQuestionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: this.props.creditCardQAs
        }
    }

    handleUserAnswer(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        var currentUserAnswer = this.state.userAnswer;

        switch (name) {
            case "yes":
                currentUserAnswer["creditCardwithCustomer"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
            case "no":
                currentUserAnswer["creditCardwithCustomer"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
            case "missingDate":
                currentUserAnswer["missingDate"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
            case "lastUsedDate":
                currentUserAnswer["lastUsedDate"] = value;
                this.setState({
                    userAnswer: currentUserAnswer
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
        }

    }

    render() {
        return (
            <div>
                <div>
                    <CreditCardQuestions handleUserAnswer={(e) => this.handleUserAnswer(e)} currentValues={this.props.creditCardQAs} />
                    <br />
                </div>
                <div className="row">
                    <button name="prev" type="button" className="btn btn-primary btn-sm pull-left stepZillLeftabt" onClick={() => this.props.jumpToStep(1)} >Prev</button>
                    <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(3)} >Next</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        creditCardQAs: state.creditCardQAs
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addCreditCardQuestionAnswer: (payload) => {
            dispatch(addCreditCardQuestionAnswer(payload));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreditCardQuestionnaire);