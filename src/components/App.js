import React, { Component } from 'react';
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addDispute } from './../actions/actions'
import logo from './../logo.svg';
import './App.css';

import TransactionHistoryApp from './TransactionHistoryApp'
import DisputeCreditTransaction from './DisputeCreditTransaction'




class App extends Component {
  constructor(props) {
    super(props);
    this.handleDisputebt = this.handleDisputebt.bind(this);
    this.state = {
      transactionList: ["Transaction1", "Transaction2", "Transaction3"],
      data:
        [
          {
            "id": "1",
            "recentActivity": "18/03/2018",
            "type": "Payment",
            "Description": "Simple",
            "Amount": 24,
            "Balance": 36,
            "extraDescriptions": "extraDescriptions"
          },
          {
            "id": "2",
            "recentActivity": "18/03/2018",
            "type": "Payment",
            "Description": "Good",
            "Amount": 24,
            "Balance": 36,
            "extraDescriptions": "extraDescriptions"
          },
          {
            "id": "3",
            "recentActivity": "18/03/2018",
            "type": "Payment",
            "Description": "Bad",
            "Amount": 25,
            "Balance": 36,
            "extraDescriptions": "extraDescriptions"
          }
        ]
    };
  }

  handleDisputebt(data) {
    const stateData = this.state.data;

    var storeData = [];
    for (var i in stateData) {
      let j = stateData[i];

      if (data.includes(j.id)) {
        storeData.push(j);
      }
    }
    this.props.dispatch(addDispute(data));
    this.props.history.push('/DisputeCreditTransaction');
  }
  render() {
    let wrapperClass = "gray-bg " + this.props.location.pathname;
    return (

      <div id="wrapper">
        <div id="page-wrapper" className={wrapperClass}>
          <TransactionHistoryApp transactionList={this.state.transactionList} data={this.state.data} handleDisputebt={this.handleDisputebt} />
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
export default connect(select)(App);

// {console.log(this.state.transactionSelectValue)}
// <button type="button" class="btn btn-primary btn-sm" onClick={() => this.props.dispatch(addDispute(this.state.transactionSelectValue))} >Dispute</button>
// onClick={() => this.props.dispatch(addDispute(this.state.transactionSelectValue)) }


// componentDidMount() {
//   fetch(`http://localhost:8088/`)
//     .then(result => {
//       this.setState({ transactionList: result.json() });
//     });
//   fetch(`http://localhost:8088/`)
//     .then(result => {
//       this.setState({ transactionList: result.json() });
//     });
// }


// <div class="row" >
//   <div class="col-sm-12">
//     <table class="grid table table-borderless table-hover" id="myTable" >
//       <thead>
//       </thead>
//       <tr>
//         <th><input type="checkbox" class="checkbox" /></th>
//         <th>Recent Activity</th>
//         <th>Type</th>
//         <th>Description</th>
//         <th>Amount</th>
//         <th>Balance</th>
//       </tr>
//       <tbody>
//         {this.state.rows}
//       </tbody>
//     </table>
//   </div>
// </div>

// const rowsData = this.props.data.map((dataItem) =>
// <tr key={dataItem.id}>
//   <td><input type="checkbox" onChange={this.props.handleCheckedTrans} value={dataItem.id} /></td>
//   <td>{dataItem.recentActivity}
//     <br /><span>{dataItem.extraDescriptions}</span></td>
//   <td>{dataItem.type}
//     <br /><span>{dataItem.extraDescriptions}</span></td>
//   <td>{dataItem.Description}
//     <br /><span>{dataItem.extraDescriptions}</span></td>
//   <td>{dataItem.Amount}
//     <br /><span>{dataItem.extraDescriptions}</span></td>
//   <td>{dataItem.Balance}
//     <br /><span>{dataItem.extraDescriptions}</span></td>
// </tr>
// );
