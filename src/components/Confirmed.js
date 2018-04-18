import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setExtraInfo } from './../actions/actions';



function FinalConfirmation(props) {

    return (
        <div class="container">
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-lg-12">
                    <h3> Confirmed</h3>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <label>Your Dispute Request ID is: </label>
                    <p>Thanks you for your submission. Your dispute request has been successfully logged. You can review your request at any time in your notification list in the menu bar. </p>
                    <p>You should recieve an email shortly indicating next steps.</p>
                    <p>If you want, you can use the ID Number to check or ask more information about the process of your request.</p>
                    <p>Regards,</p>
                </div>
                <br />
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
        e.preventDefault();
        // this.props.history.push('/');
    }

    render() {
        return (
            <FinalConfirmation handleSubmit={this.handleSubmit} />

        );
    }
}

function select(store) {
    return {
        extraInfos: store.extraInfos
    }
}

export default connect(select)(Confirmed);