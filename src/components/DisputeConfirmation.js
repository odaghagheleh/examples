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
            <div class="row">
                <div class="col-lg-12">
                    <label> Please confirm your dispute before submission </label>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <p>1. Why are you disputing these transactions?</p>
                    <p>{props.transactionDisputeReasonAnswers}</p>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <p>2. Has your credit card been with you the entire time?</p>
                    <p>{creditCardwithCustomer}</p>
                </div>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <p>3. Is there anything else you'd like to tell us about this dispute? </p>
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
        <table class="table borderless" id="myTable" >
            <tbody>
                {rowsData}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><hr width="100%" /></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>{rowSum}</td>
                </tr>
            </tbody>
        </table>
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
    }

    render() {
        return (
            <div class="row" >
                <div class="col-lg-8">
                    <Confirmation
                        transactionDisputeReasonAnswers={this.state.transactionDisputeReasonAnswers}
                        creditCardQAs={this.state.creditCardQAs}
                        extraInfos={this.state.extraInfos}
                    />
                </div>
                <div class="col-lg-4">
                    <hr />
                    <p>Transaction(s) in Dispute</p>
                    <TransactionList data={this.props.transactionDisputes} />
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