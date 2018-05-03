import React, { Component } from 'react';
import { connect } from 'react-redux';

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

        <table className="table borderless " id="myTable" >
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

class DisputeCreditTransaction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            confirmCheck : false
        }
        this.confirmed = this.confirmed.bind(this);
    }

    confirmed() {
        var jsonObj = this.state;
        jsonObj.confirmCheck = true;
        this.setState({
            jsonObj
        });
    }

    render() {
        return (
            <div>
                <div className="row" >
                    <br />
                    <div className="col-sm-12">
                        <p className="DecisionQuestionApp__question">Please confirm the following transactions in question</p>
                        <label className="DecisionQuestionApp__step">Transaction selected:</label>
                        <TransactionList data={this.props.transactionDisputes} handleConfirmbt={this.handleConfirmbt} />
                    </div>
                </div>
                <div className="row">
                <div className="DecisionQuestionApp__spacer">

                        <button name="confirm" type="button" className="btn DecisionQuestionApp__custom-buttons btn-primary" onClick={this.confirmed} >Yes - This is correct</button>
                        <button name="cancel" type="button" className="btn DecisionQuestionApp__custom-buttons" onClick={() => this.props.history.push('/')} >No - Cancel</button>
                </div>
                </div>
                <div className="row">
                    {
                        this.state.confirmCheck === true ?
                        <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(1)} >
                        Next</button>
                        :
                        <button name="next" disabled type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(1)} >
                        Next</button>
                    }


                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        transactionDisputes: state.transactionDisputes
    }
}


export default connect(mapStateToProps)(DisputeCreditTransaction);
