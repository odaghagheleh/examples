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
        <div class="row" >
            <div class="col-sm-12">
                <h4>Please confirm the following transactions in question</h4>
                <p>Transaction selected:</p>
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

class DisputeCreditTransaction extends Component {
    constructor(props) {
        super(props);
        this.handleConfirmbt = this.handleConfirmbt.bind(this);
    }

    handleConfirmbt(e) {
        const target = e.target;
        const targetName = target.name;

        if (targetName == 'confirm') {
            this.props.history.push('/DecisionQuestionApp');

        } else if (targetName == 'cancel') {
            this.props.history.push('/');
        }
    }

    render() {
        let wrapperClass = "gray-bg ";
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div class="container">
                        <TransactionList data={this.props.transactionDisputes} handleConfirmbt={this.handleConfirmbt} />
                        <div class="row">
                            <br />
                            <br />
                            <br />
                            <div class="col-lg-4">
                                <button name="cancel" type="button" class="btn btn-primary btn-sm" onClick={this.handleConfirmbt} >No -Cancel</button>
                            </div>
                            <div class="col-lg-4">
                            </div>
                            <div class="col-lg-4">
                                <button name="confirm" type="button" class="btn btn-primary btn-sm pull-right" onClick={this.handleConfirmbt} >Yes - This is correct</button>
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
export default connect(select)(DisputeCreditTransaction);


// {console.log(JSON.stringify(this.props.transactionDisputes))}
