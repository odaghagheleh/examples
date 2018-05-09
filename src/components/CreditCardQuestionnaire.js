import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import { addCreditCardQuestionAnswer } from './../actions/actions';

class CreditCardQuestions extends Component  {
    constructor (props) {
        super(props)
        this.state = {
            missingDate: null,
            lastUsedDate: null,
        };
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(name, date) {
        this.setState({ [name] : date});
        const e = {};
        e.target = {
            name,
            value: date.format("YYYY-MM-DD")
        };
        this.props.handleUserAnswer(e);
      }


    render() {
        const { currentValues } = this.props;
        const yesBt = currentValues.creditCardwithCustomer === "Yes" ?
            <input name="yes" type="button" className="btn btn-sm  btn-primary DecisionQuestionApp__custom-buttons neibourb active" onClick={this.props.handleUserAnswer} value="Yes" /> :
            <input name="yes" type="button" className="btn btn-sm btn-default DecisionQuestionApp__custom-buttons neibourb" onClick={this.props.handleUserAnswer} value="Yes" />;

        const noBt = currentValues.creditCardwithCustomer === "No" ?
            <input name="no" type="button" className="btn btn-primary DecisionQuestionApp__custom-buttons btn-sm neibourbt active" onClick={this.props.handleUserAnswer} value="No" /> :
            <input name="no" type="button" className="btn btn-sm DecisionQuestionApp__custom-buttons btn-default neibourbt" onClick={this.props.handleUserAnswer} value="No" />;

        const showOrNot = () => {
            if (currentValues.creditCardwithCustomer === "No") {

                return (<div>
                    <div className="row">
                        <div className="form-inline col-lg-12">
                            <div className="form-group">
                                <label className="DecisionQuestionApp__step">When was your Credit Card last in your posession?</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <p className="DecisionQuestionApp__spacer DecisionQuestionApp__quest-p">What date did you realize the card(s) were missing?</p>
                        </div>
                        <div className="col-lg-5">
                            <DatePicker
                                name="missingDate"
                                selected={this.state.missingDate}
                                onChange={(date) => this.handleChange('missingDate', date)}
                                disabledKeyboardNavigation
                                placeholderText="Click to select a date"

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <p className="DecisionQuestionApp__spacer DecisionQuestionApp__quest-p">What date did you last use the card?</p>
                        </div>
                        <div className="col-lg-5">
                            <DatePicker
                                name="lastUsedDate"
                                selected={this.state.lastUsedDate}
                                onChange={(date) => this.handleChange('lastUsedDate', date)}
                                disabledKeyboardNavigation
                                placeholderText="Click to select a date"
                            />
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
                        <label className="DecisionQuestionApp__step">2. Has your credit card been with you the entire time?</label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-inline col-lg-12 DecisionQuestionApp__spacer">
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

}

class CreditCardQuestionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: this.props.creditCardQAs,

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
                    userAnswer: currentUserAnswer,
                    confirmed: true
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
            case "no":
                currentUserAnswer["creditCardwithCustomer"] = value;
                this.setState({
                    userAnswer: currentUserAnswer,
                    confirmed: true
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
            case "missingDate":
                currentUserAnswer["missingDate"] = value;
                this.setState({
                    userAnswer: currentUserAnswer,
                    confirmed: true
                });
                this.props.addCreditCardQuestionAnswer(this.state.userAnswer);
                break;
            case "lastUsedDate":
                currentUserAnswer["lastUsedDate"] = value;
                this.setState({
                    userAnswer: currentUserAnswer,
                    confirmed: true
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
                    <button name="prev" type="button" className="btn btn-primary  pull-left stepZillLeftabt" onClick={() => this.props.jumpToStep(1)} >&lt;</button>
                    {
                        this.state.confirmed == true ?
                            <button name="next" type="button" className="btn btn-primary  pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(3)} >Next</button>
                            :
                            <button name="next" type="button" disabled className="btn btn-primary  pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(3)} >Next</button>
                    }
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
