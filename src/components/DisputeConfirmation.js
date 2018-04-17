import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { setExtraInfo } from './../actions/actions';

function Confirmation(props) {
    const creditCardQAs = props.creditCardQAs;
    const creditCardwithCustomer = creditCardQAs.creditCardwithCustomer == undefined ?
        "" :
        creditCardQAs.creditCardwithCustomer;

    return (
        <div>
            <br />
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
                    <label>1. Why are you disputing these transactions?</label>
                    <p>{props.transactionDisputeReasonAnswers}</p>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <label>2. Has your credit card been with you the entire time?</label>
                    <p>{creditCardwithCustomer}</p>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <label>3. Is there anything else you'd like to tell us about this dispute? </label>
                    <p>{props.extraInfos}</p>
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
            data: this.props.transactionDisputes,
            transactionDisputeReasonAnswers: this.props.transactionDisputeReasonAnswers,
            creditCardQAs: this.props.creditCardQAs,
            extraInfos: this.props.extraInfos
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const target = e.target;
        const name = target.name;

        if (name == "next") {
            this.props.history.push('/Confirmed');
        } else if (name == "back") {
            this.props.history.push('/ExtraInfoInput');
        }
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div class="container" >
                        <div class="row" >
                            <div class="col-lg-6">
                                <Confirmation
                                    transactionDisputeReasonAnswers={this.state.transactionDisputeReasonAnswers}
                                    creditCardQAs={this.state.creditCardQAs}
                                    extraInfos={this.state.extraInfos}
                                />
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
                                <button name="back" type="button" class="btn btn-primary btn-sm" onClick={this.handleSubmit}>Back</button>
                            </div>
                            <div class="col-lg-4">
                            </div>
                            <div class="col-lg-4">
                                <button name="next" type="button" class="btn btn-primary btn-sm pull-right" onClick={this.handleSubmit}>Submit</button>
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
        transactionDisputes: store.transactionDisputes,
        transactionDisputeReasonAnswers: store.transactionDisputeReasonAnswers,
        creditCardQAs: store.creditCardQAs,
        extraInfos: store.extraInfos
    }
}

export default connect(select)(DisputeConfirmation);