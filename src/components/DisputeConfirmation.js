import React, { Component } from 'react';
import { connect } from 'react-redux';


const Confirmation = props =>  {
    const creditCardQAs = props.creditCardQAs;
    // const creditCardwithCustomer = creditCardQAs.creditCardwithCustomer == undefined ?
    //     "" :
    //     creditCardQAs.creditCardwithCustomer;

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <label> Please confirm your dispute before submission </label>
                </div>
                <br />
                <br />
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <p>1. Why are you disputing these transactions?</p>
                    <p>{props.transactionDisputeReasonAnswers}</p>
                </div>
                <br />
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>2. Has your credit card been with you the entire time?</p>
                    <p>{props.creditCardQAs.creditCardwithCustomer}</p>
                </div>
                <br />
            </div>
            <div className="row">
                <div className="col-lg-5">
                    <p>3. Is there anything else you'd like to tell us about this dispute? </p>
                    <p>{props.extraInfos}</p>
                </div>
                <br />
            </div>
        </div>
    );

}
const TransactionList = props => {

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
        <table className="table borderless" id="myTable" >
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

const DisputeConfirmation = props => {

    return (
        <div className="row" >
            <div className="col-lg-8">
                <Confirmation
                    transactionDisputeReasonAnswers={props.transactionDisputeReasonAnswers}
                    creditCardQAs={props.creditCardQAs}
                    extraInfos={props.extraInfos}
                />
            </div>
            <div className="col-lg-4">
                <hr />
                <p>Transaction(s) in Dispute</p>
                <TransactionList data={props.transactionDisputes} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        transactionDisputes: state.transactionDisputes,
        transactionDisputeReasonAnswers: state.transactionDisputeReasonAnswers,
        creditCardQAs: state.creditCardQAs,
        extraInfos: state.extraInfos
    }
}

export default connect(mapStateToProps)(DisputeConfirmation);