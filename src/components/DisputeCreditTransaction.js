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

        <table class="table borderless " id="myTable" >
            {/* <tr>
                <th>Recent Activity</th>
                <th>Type</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Balance</th>
            </tr> */}
            <tbody>
                {rowsData}                
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><hr width="100%"/></td>
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
        this.handleConfirmbt = this.handleConfirmbt.bind(this);
    }

    handleConfirmbt(e) {
        const target = e.target;
        const targetName = target.name;

        if (targetName == 'confirm') {
            this.props.jumpToStep(1);

        } else if (targetName == 'cancel') {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <div class="row" >
                    <br />
                    <div class="col-sm-12">
                        <h3>Please confirm the following transactions in question</h3>
                        <br />
                        <p>Transaction selected:</p>
                        <TransactionList data={this.props.transactionDisputes} handleConfirmbt={this.handleConfirmbt} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2">
                        <button name="confirm" type="button" class="btn btn-primary btn-sm" onClick={this.handleConfirmbt} >Yes - This is correct</button>
                    </div>
                    <div class="col-sm-4">
                        <button name="cancel" type="button" class="btn btn-sm" onClick={this.handleConfirmbt} >No -Cancel</button>
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
