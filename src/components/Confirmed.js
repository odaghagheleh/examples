/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from "../../node_modules/superagent/superagent";
import { setExtraInfo } from './../actions/actions';
import { Link } from 'react-router-dom';
import Greeting from './../components/Greating';

const FinalConfirmation = (props) =>{
    return (
        <div>
            <br />
            <div className="row">
                <div className="col-lg-12">
                    <h3> Confirmed</h3>
                </div>
                <br />
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <label>Your Dispute Request ID is: <b>{props.submitDisputesResult}</b></label>
                    <p>Thanks you for your submission. Your dispute request has been successfully logged. You can review your request at any time in your notification list in the menu bar. </p>
                    <p>You should recieve an email shortly indicating next steps.</p>
                    <p>If you want, you can use the ID Number to check or ask more information about the process of your request.</p>
                    <p>Regards,</p>
                </div>
                <br />
            </div>
            <div className="row">
              <Link
               className="btn btn-primary DecisionQuestionApp__custom-buttons pull-right stepZillRightabt"
               to="/">Home
             </Link>
           </div>
        </div>
    );
}

class Confirmed extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        // e.preventDefault();
        this.props.history.push('/');
    }
    render() {
        return (
            <FinalConfirmation handleSubmit={this.handleSubmit}  submitDisputesResult={this.props.submitDisputesResult}/>
        );
    }
}

const mapStateToProps = state => {
    return {
        submitDisputesResult: state.submitDisputes
    }
}
export default connect(mapStateToProps)(Confirmed);
