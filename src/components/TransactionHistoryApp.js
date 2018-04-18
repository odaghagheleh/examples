
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { addDispute, getTransactionList, getTransactionHistory } from './../actions/actions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

function SelectBar(props) {

  const transactionList = props.transactionList;
  const selectItem = transactionList.map((transactionItem) =>
    <option key={transactionItem} value={transactionItem}>{transactionItem}</option>
  )
  return (

    <select class="input-sm form-control input-s-sm inline">
      {selectItem}
    </select>

  );
}

function ProductTable(props) {

  function onRowSelect(row, isSelected, e) {
    props.handleCheckedTrans(JSON.stringify(row), isSelected);
  }

  function onSelectAll(isSelected, rows) {
    // console.log(JSON.stringify(rows[i]));
    props.handleCheckedAll(JSON.stringify(rows), isSelected);
  }

  const selectRowProp = {
    mode: 'checkbox',
    // clickToSelect: true,
    onSelect: onRowSelect,
    onSelectAll: onSelectAll
  };

  return (
    <BootstrapTable data={props.data} selectRow={selectRowProp} bordered={false} search={true} striped hover pagination>
      <TableHeaderColumn isKey dataField='id' dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='recentActivity' dataSort={true}>recentActivity</TableHeaderColumn>
      <TableHeaderColumn dataField='type' dataSort={true}>type</TableHeaderColumn>
      <TableHeaderColumn dataField='Description' dataSort={true}>Description</TableHeaderColumn>
      <TableHeaderColumn dataField='Amount' dataSort={true}>Amount</TableHeaderColumn>
      <TableHeaderColumn dataField='Balance' dataSort={true}>Balance</TableHeaderColumn>
    </BootstrapTable>
  );

  // const rowsData = props.data.map((dataItem) =>
  //   <tr key={dataItem.id}>
  //     <td>
  //       <input type="checkbox" onChange={props.handleCheckedTrans} value={JSON.stringify(dataItem)} />
  //     </td>
  //     <td>{dataItem.recentActivity}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.type}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.Description}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.Amount}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.Balance}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //   </tr>

  // );
  // return (
  //   <table class="table table-striped">
  //     <thead>
  //       <tr>
  //         <th></th>
  //         <th>Recent Activity</th>
  //         <th>Type</th>
  //         <th>Description</th>
  //         <th>Amount</th>
  //         <th>Balance</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {rowsData}
  //     </tbody>
  //   </table>
  // );

}

class TransactionHistoryApp extends Component {
  constructor(props) {
    super(props);
    this.handleDisputebt = this.handleDisputebt.bind(this);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.state = {
      transactionSelectValue: [],
      transactionList: this.props.transactionLists,
      data: this.props.transactionHistories
    };
  }
  componentWillMount() {
    this.props.dispatch(getTransactionList());
    this.props.dispatch(getTransactionHistory());
  }
  componentDidUpdate() {
    if (!(this.state.transactionList == this.props.transactionLists)) {
      this.setState({
        transactionList: this.props.transactionLists
      });
    }
    if (!(this.state.data == this.props.transactionHistories)) {
      this.setState({
        data: this.props.transactionHistories
      });
    }
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
    this.props.history.push('/MainForm');
  }

  handleCheckedAll(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;

    const value = JSON.parse(rowValue);

    value.map((dataItem) => {
      if ((checked) && !(selectedValueArray.includes(dataItem.id))) {
        selectedValueArray.push(dataItem);
        this.setState({ transactionSelectValue: selectedValueArray });

      } else if (!(checked)) {
        selectedValueArray = selectedValueArray.filter(e => e.id !== dataItem.id);
        this.setState({ transactionSelectValue: selectedValueArray });
      }
    }
    );
  }

  handleCheckedTrans(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;

    const value = JSON.parse(rowValue);

    if ((checked) && !(selectedValueArray.includes(value.id))) {
      selectedValueArray.push(value);
      this.setState({ transactionSelectValue: selectedValueArray });

    } else if (!(checked)) {
      selectedValueArray = selectedValueArray.filter(e => e.id !== value.id);
      this.setState({ transactionSelectValue: selectedValueArray });
    }
  }
  // handleCheckedTrans(e) {

  //   var selectedValueArray = this.state.transactionSelectValue;
  //   const target = e.target;
  //   const value = JSON.parse(target.value);

  //   if ((target.checked) && !(selectedValueArray.includes(value.id))) {
  //     selectedValueArray.push(value);
  //     this.setState({ transactionSelectValue: selectedValueArray });

  //   } else if (!(target.checked)) {

  //     selectedValueArray = selectedValueArray.filter(e => e.id !== value.id);
  //     this.setState({ transactionSelectValue: selectedValueArray });
  //   }
  // }

  render() {
    const { dispatch } = this.props
    let wrapperClass = "gray-bg " + this.props.location.pathname;
    return (
      <div id="wrapper">
        <div id="page-wrapper" className={wrapperClass}>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ibox float-e-margins">
                  <div class="ibox-title">
                    <h2>Dispute Credit Transaction</h2>
                    <div class="ibox-tools">
                      <a class="collapse-link">
                        <i class="fa fa-chevron-up"></i>
                      </a>
                    </div>
                  </div>
                  <div class="ibox-content">
                    <div class="row">
                      <div class="col-sm-5 m-b-xs">
                        <SelectBar transactionList={this.state.transactionList} />
                      </div>
                      <div class="col-sm-4 m-b-xs">
                      </div>
                      <div class="col-sm-3">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <br />
                        <button type="button" class="btn btn-primary btn-sm" onClick={() => this.handleDisputebt(this.state.transactionSelectValue)} >Dispute</button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <ProductTable data={this.state.data} handleCheckedTrans={this.handleCheckedTrans} handleCheckedAll={this.handleCheckedAll} />
                      </div>
                    </div>
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
    transactionLists: store.transactionLists,
    transactionHistories: store.transactionHistories
  }
}
export default connect(select)(TransactionHistoryApp);








// handleCheckedTrans(rowValue, e) {
//   console.log(JSON.stringify(rowValue));
//   var selectedValueArray = this.state.transactionSelectValue;
//   const target = e.target;
//   const value = JSON.parse(rowValue);

//   if ((target.checked) && !(selectedValueArray.includes(value.id))) {
//     selectedValueArray.push(value);
//     this.setState({ transactionSelectValue: selectedValueArray });

//   } else if (!(target.checked)) {

//     selectedValueArray = selectedValueArray.filter(e => e !== value);
//     this.setState({ transactionSelectValue: selectedValueArray });
//   }
// }