/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from "../../node_modules/superagent/superagent";
import { setExtraInfo } from './../actions/actions';



function FinalConfirmation(props) {

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
                    <label>Your Dispute Request ID is: <b>FR-0000000012</b></label>
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
        this.state = {
            result: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.restCallFetch = this.restCallFetch.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.history.push('/');
    }

    render() {
        return (
            
            <FinalConfirmation handleSubmit={this.handleSubmit} />
            // <div>
            //                  <p> --------------------------- </p>
            //                  <button name="get" type="button"    onClick={() => this.restCallFetch()} >Get</button>
            //                  <pre> {JSON.stringify(this.state.result,null, 2)} </pre>
            //                  </div>
            
            
        );
    }

    restCallFetch() {
        var that = this;
        request
        .post('https://httpbin.org/anything')
        .set('Content-Type', 'application/json')
        .auth('pamAdmin', 'redhatpam1!')
        .send({ "Hakuna":"Matata" })
        .then(function(res) {
            var tmp = {};
            tmp.status = res.status;
            tmp.body = res.body;
            that.setState({
                result:tmp
            })
        })
        .catch(function(err) {
            console.log("Failed");
            console.log(err.message);
            console.log(err.response);
        });
    }


}

function select(store) {
    return {
        extraInfos: store.extraInfos
    }
}

export default connect(select)(Confirmed);