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
        this.handleConfirmbt = this.handleConfirmbt.bind(this);
        this.confirmed = this.confirmed.bind(this);
    }

    handleConfirmbt(e) {
        const target = e.target;
        const targetName = target.name;

        if (targetName === 'confirm') {
            this.props.jumpToStep(1);

        } else if (targetName === 'cancel') {
            this.props.history.push('/');
        }
    }

    confirmed() {
        var jsonObj = this.state;
        jsonObj.confirmCheck = true;
        this.setState({
            jsonObj
        });
    }

    buttonActive(value) {
        if(value === true) {
            return(
                <button name="next" type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(1)} >
                        Next</button>
            )
        }else{
            return(
                <button name="next" disabled type="button" className="btn btn-primary btn-sm pull-right stepZillRightabt" onClick={() => this.props.jumpToStep(1)} >
                        Next</button>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="row" >
                    <br />
                    <div className="col-sm-12">
                        <h3>Please confirm the following transactions in question</h3>
                        <br />
                        <p>Transaction selected:</p>
                        <TransactionList data={this.props.transactionDisputes} handleConfirmbt={this.handleConfirmbt} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <button name="confirm" type="button" className="btn btn-primary btn-sm" onClick={this.confirmed} >Yes - This is correct</button>
                    </div>
                    <div className="col-sm-4">
                        <button name="cancel" type="button" className="btn btn-sm" onClick={this.handleConfirmbt} >No -Cancel</button>
                    </div>
                </div>
                <div className="row">
                    {/* <button name="prev" type="button" className="btn btn-primary btn-sm pull-left stepZillLeftabt" onClick={() => this.props.jumpToStep(1)} >Prev</button> */}
                    {this.buttonActive(this.state.confirmCheck)}
                    
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

