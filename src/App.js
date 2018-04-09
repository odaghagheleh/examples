import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

function SearchBar(props) {

  const transactionList = props.transactionList;
  const selectItem = transactionList.map((transactionItem) =>
    <option key={transactionItem} value={transactionItem}>{transactionItem}</option>
  )
  return (
    <div>
      <div class="row">
        <div class="col-sm-12">
          <h3>Transaction History</h3>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <form class="form-inline">
            <label>SHOW</label>
            <div class="form-group col-sm-4">
              <select class="form-control col-sm-12" value={props.transactionSelectValue}>
                {selectItem}
              </select>
            </div>
            <div class="form-group col-sm-4">
              <input type="text" class="form-control col-sm-8" value={props.searchText} placeholder="Search" />
              <input type="submit" class="btn btn-primary" value="Submit" />
              <i class="fas fa-print"></i>
              <i class="fas fa-angle-down"></i>
            </div>
          </form>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-sm-12">
          <input type="submit" class="btn btn-primary" value="Dispute" />
        </div>
      </div>
      <br />
    </div>
  );
}
class ProductTable extends Component {
  constructor(props) {
    super(props);

    const rowsData = this.props.data.map((dataItem) =>
      <tr key={dataItem.id}>
        <td><input type="checkbox" onChange={this.props.handleCheckedTrans.bind(this, dataItem.id)} /></td>
        <td>{dataItem.recentActivity}
          <br /><span>{dataItem.extraDescriptions}</span></td>
        <td>{dataItem.type}
          <br /><span>{dataItem.extraDescriptions}</span></td>
        <td>{dataItem.Description}
          <br /><span>{dataItem.extraDescriptions}</span></td>
        <td>{dataItem.Amount}
          <br /><span>{dataItem.extraDescriptions}</span></td>
        <td>{dataItem.Balance}
          <br /><span>{dataItem.extraDescriptions}</span></td>
      </tr>
    );

    this.state = {
      data: this.props.data,
      rows: rowsData,
    }
  }
  render() {
    return (
      <div class="row" >
        <div class="col-sm-12">
          <table class="grid table table-borderless table-hover" id="myTable" >
            <thead>
            </thead>
            <tr>
              <th><input type="checkbox" class="checkbox" /></th>
              <th>Recent Activity</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
            <tbody>
              {this.state.rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.state = {
      transactionSelectValue: [],
      searchText: "",
      transactionList: ["Transaction1", "Transaction2", "Transaction3"],
      data:
        [
          {
            "id": "1",
            "recentActivity": "18/03/2018",
            "type": "Payment",
            "Description": "Simple",
            "Amount": "+$24",
            "Balance": "+36",
            "extraDescriptions": "extraDescriptions"
          },
          {
            "id": "2",
            "recentActivity": "18/03/2018",
            "type": "Payment",
            "Description": "Simple",
            "Amount": "+$24",
            "Balance": "+36",
            "extraDescriptions": "extraDescriptions"
          },
          {
            "id": "3",
            "recentActivity": "18/03/2018",
            "type": "Payment",
            "Description": "Simple",
            "Amount": "+$25",
            "Balance": "+36",
            "extraDescriptions": "extraDescriptions"
          }
        ]
    };
  }

  handleCheckedTrans(dataItem) {
    const selectedValueArray = this.state.transactionSelectValue;
    selectedValueArray.push(dataItem);
    this.setState({
      transactionSelectValue: selectedValueArray
    });
    alert(this.state.transactionSelectValue);
  }
  render() {
    return (
      <div class="container">
        <SearchBar searchText={this.state.searchText} transactionList={this.state.transactionList} transactionSelectValue={this.state.transactionSelectValue} />
        <ProductTable data={this.state.data} handleCheckedTrans={this.handleCheckedTrans} />
        {this.state.transactionSelectValue}
      </div>
    );
  }
}



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

// <ReactTable
//   data={data}
//   columns={[
//     {
//       Header: "Recent Activity",
//       accessor: "recentActivity"
//     },
//     {
//       Header: "Type",
//       accessor: "type"
//     },
//     {
//       Header: 'Description',
//       accessor: "Description"
//     },
//     {
//       Header: 'Amount',
//       accessor: "Amount"
//     },
//     {
//       Header: 'Balance',
//       accessor: "Balance"
//     }
//   ]}
//   defaultPageSize={10}
//   className="-striped -highlight"
// />

export default App;
