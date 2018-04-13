import React, { Component } from 'react';
import { connect } from 'react-redux'


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

function ConfirmTransaction(props) {

    return (
        <div>
            <h4>Please confirm the following transactions in question</h4>
            <p>Transaction selected:</p>
            <TransactionList data={props.data} />
            <div class="form-inline">
                <div class="form-group col-sm-2">
                    <button name="confirm" type="button" class="btn btn-primary btn-sm" onClick={props.handleConfirmbt} >Yes - This is correct</button>
                </div>
                <div class="form-group col-sm-2">
                    <button name="cancel" type="button" class="btn btn-primary btn-sm" onClick={props.handleConfirmbt} >No -Cancel</button>
                </div>
            </div>
        </div>
    );
}

class DisputeCreditTransaction extends Component {
    constructor(props) {
        super(props);
        this.handleConfirmbt = this.handleConfirmbt.bind(this);
        this.state = {
            data: this.props.transactionDisputes
        }
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
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>

                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Basic Wizzard</h5>
                            <div class="ibox-tools">
                                <a class="collapse-link">
                                    <i class="fa fa-chevron-up"></i>
                                </a>
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i class="fa fa-wrench"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a class="close-link">
                                    <i class="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ibox-content">
                            <p>
                                This is basic example of Step
                        </p>
                            <div id="wizard">
                                <h1>First Step</h1>
                                <div class="step-content">
                                    <div class="text-center m-t-md">
                                        <h2>Hello in Step 1</h2>
                                        <ConfirmTransaction data={this.state.data} handleConfirmbt={this.handleConfirmbt} />
                                    </div>
                                </div>

                                <h1>Second Step</h1>
                                <div class="step-content">
                                    <div class="text-center m-t-md">
                                        <h2>This is step 2</h2>
                                        <p>
                                            This content is diferent than the first one.
                                    </p>
                                    </div>
                                </div>

                                <h1>Third Step</h1>
                                <div class="step-content">
                                    <div class="text-center m-t-md">
                                        <h2>This is step 3</h2>
                                        <p>
                                            This is last content.
                                    </p>
                                    </div>
                                </div>
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
