/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitDispute } from './../actions/actions';
import currencyFormatter from 'currency-formatter';


const Confirmation = props => {
    const creditCardQAs = props.creditCardQAs;

    return (
        <div className="DisputeConfirmation">
            <div className="row">
                <div className="col-lg-12">
                    <label className="DecisionQuestionApp__step"><b> Please confirm your dispute before submission </b></label>
                </div>
                <br />
                <br />
                <br />
            </div>
            <ol className="order-list">
                <li>
                    <p className="DisputeConfirmation__list">Why are you disputing these transactions?</p>
                    <p className="DisputeConfirmation__list-small">{props.transactionDisputeReasonAnswers}</p>
                </li>
                <li>
                    <p className="DisputeConfirmation__list">Has your credit card been with you the entire time?</p>
                    <p className="DisputeConfirmation__list-small">{props.creditCardQAs.creditCardwithCustomer}</p>
                </li>
                <li>
                    <p className="DisputeConfirmation__list"> Is there anything else you&apos;d like to tell us about this dispute? </p>
                    <p className="DisputeConfirmation__list-small">{props.extraInfos}</p>
                </li>
            </ol>
        </div>
    );

}
const TransactionList = props => {

    var rowSum = 0;
    const rowsData = props.data.map(function (dataItem) {
        rowSum = (rowSum + dataItem.Amount);
        return (<tr key={dataItem.id}>
            <td>{dataItem.recentActivity}</td>
            <td>{dataItem.type}</td>
            <td>{dataItem.Description}</td>
            <td>{currencyFormatter.format(dataItem.Amount, { code: 'USD' })}</td>
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
                    <td><hr className="DecisionQuestionApp__hr2" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="DecisionQuestionApp__total">Total:</td>
                    <td className="DecisionQuestionApp__total">${rowSum}</td></tr>
            </tbody>
        </table>
    );
}

const DisputeConfirmation = props => {

    const handdleSubmitt = () => {

        props.submitDispute();
        props.jumpToStep(6);
    }

    return (
        <div className="DisputeConfirmation">
            <div className="row" >
                <div className="col-lg-7">
                    <Confirmation
                        transactionDisputeReasonAnswers={props.transactionDisputeReasonAnswers}
                        creditCardQAs={props.creditCardQAs}
                        extraInfos={props.extraInfos}
                    />
                </div>
                <div className="col-lg-5">
                    <div className="DisputeConfirmation__box">
                        <p>Transaction(s) in Dispute</p>
                        <TransactionList data={props.transactionDisputes} />
                    </div>
                </div>
            </div>
            <div className="col-lg-12"></div>
            <div className="row">
                <button name="prev" type="button" className="btn btn-sm pull-right stepZillLeftabt_onsubmit_bt" onClick={() => props.jumpToStep(4)} ><i class="fa fa-chevron-left"></i></button>
                <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => handdleSubmitt()} >Submit</button>
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
const mapDispatchToProps = dispatch => {
    return {
        submitDispute: () => {
            dispatch(submitDispute());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisputeConfirmation);
