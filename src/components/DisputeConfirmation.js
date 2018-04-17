import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { setExtraInfo } from './../actions/actions';

function Confirmation(props) {

    return (
        <div>
            <br />
            <br />
            <br />
            <div class="row">
                <div class="col-lg-12">
                    <label> Please confirm your dispute before submission </label>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <p>1. Why are you disputing these transactions?</p>
                    <select class="form-control col-sm-12" ></select>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p>2. Has your credit card been with you the entire time?</p>
                    <div class="form-inline">
                        <div class="form-group col-sm-1">
                            <button name="yes" type="button" class="btn btn-primary btn-sm" >Yes</button>
                        </div>
                        <div class="form-group">
                            <button name="no" type="button" class="btn btn-primary btn-sm" >No</button>
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <p>3. Is there anything else you'd like to tell us about this dispute? </p>
                    <textarea class="form-control" rows="3" name="usertext" placeholder="Type here..."></textarea>
                </div>
                <br />
            </div>
        </div>
    );

}
function TransactionList(props) {

    var rowSum = 0;
    const rowsData = props.data.map(function (dataItem) {
        rowSum = rowSum + dataItem.Balance;
        return (<tr key={dataItem.id}>
            <td>{dataItem.recentActivity}</td>
            <td>{dataItem.type}</td>
            <td>{dataItem.Description}</td>
            <td>{dataItem.Amount}</td>
            <td>{dataItem.Balance}</td>
        </tr>);
    }
    );
    return (
        <div class="row" >
            <div class="col-sm-12">
                <table class="grid table table-borderless table-hover" id="myTable" >
                    <tr>
                        <th>Recent Activity</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                    <tbody>
                        {rowsData}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>{rowSum}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

class DisputeConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.transactionDisputes
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.dispatch(setExtraInfo(this.state.answers));
        this.props.history.push('/Confirmed');
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div class="container" >
                        <div class="row" >
                            <div class="col-lg-6">
                                <Confirmation/>
                            </div>
                            <div class="col-lg-6">
                                <br />
                                <br />
                                <br />
                                <TransactionList data={this.props.transactionDisputes} />
                            </div>
                        </div>
                        <div class="row">
                                <br />
                                <br />
                                <br />
                            <div class="col-lg-4">
                                <button name="next" type="submit" class="btn btn-primary btn-sm">Edit</button>
                            </div>
                            <div class="col-lg-4">
                            </div>
                            <div class="col-lg-4">
                                <button name="next" type="submit" class="btn btn-primary btn-sm pull-right" onClick={this.handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
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

export default connect(select)(DisputeConfirmation);