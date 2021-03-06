/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { addDispute, getTransactionList, getTransactionHistory } from './../actions/actions';
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table';

import HelloBar from './HelloBar';
import InformationTab from './InformationTab';
import MonthlyIncome from './MonthlyIncome';
import currencyFormatter from 'currency-formatter';

const SelectBar = props => {

  const transactionList = props.transactionList;
  const selectItem = transactionList.map((transactionItem) =>
    <option key={transactionItem} value={transactionItem}>{transactionItem}</option>
  )
  return (
    <select className="input-sm form-control input-s-sm inline">
      {selectItem}
    </select>
  );
}

const ProductTable = props => {

  function onRowSelect(row, isSelected, e) {
    props.handleCheckedTrans(JSON.stringify(row), isSelected);
  }

  function onSelectAll(isSelected, rows) {
    props.handleCheckedAll(JSON.stringify(rows), isSelected);
  }

  const expandComponent = (row) => {
    return (
      <BSTable data={row.extraDescriptions} />
    );
  }
  const isExpandableRow = (row) => {
    return "true";
  }

  const selected = props.transactionDisputes.map((item) => item.id);

  const createDisputeButton = (onClick) => {
    return (
      <InsertButton
        btnText='Dispute'
        btnContextual={props.transactionDisputes.length > 0 ? 'btn btn-primary btn-md': 'btn btn-primary btn-md disabled disabled-grey'}
        className='btn btn-primary btn-md'
        btnGlyphicon=''
        onClick={() => props.transactionDisputes.length > 0 ? props.handleDisputebr(): false} />
    );
  }

  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true,
    onSelect: onRowSelect,
    onSelectAll: onSelectAll,
    selected: selected
  };

  const qualityType = {
    Payment: 'Payment',
    Charge: 'Charge',
    Transfer: 'Transfer'
  };

  const options = {
    sizePerPage: 5,
    insertBtn: createDisputeButton
  }

  const enumFormatter = (cell, row, enumObject) => {
    return enumObject[cell];
  }

  const priceFormatter = (cell, row) => {
    return <span>{currencyFormatter.format(cell, { code: 'USD' })}</span>;
  }

  const rowClassNameFormat = (row, rowIdx) => {
    return rowIdx % 2 === 0 ? 'td-column-grey' : 'td-column-white';
  }

  return (
    <BootstrapTable data={props.data}
      insertRow
      options={options}
      bordered={false}
      search={true}
      selectRow={selectRowProp}
      expandableRow={(row) => { return 'true' }}
      expandComponent={(row) => { return (<BSTable data={row.extraDescriptions} />) }}
      trClassName={rowClassNameFormat}
      tableHeaderClass='tableheader'
     pagination>
      <TableHeaderColumn isKey dataField='id' dataSort={true} hidden>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='recentActivity' dataSort={true}>Recent Activity</TableHeaderColumn>
      <TableHeaderColumn dataField='type' dataSort={true} headerAlign='left'>Type</TableHeaderColumn>
      <TableHeaderColumn dataField='Description' dataSort={true}>Description</TableHeaderColumn>
      <TableHeaderColumn dataField='Amount' dataFormat={priceFormatter} dataSort={true} tdStyle={(f) => f > 0 ? { color: '#00dd24'} : { color: 'red' }}>Amount</TableHeaderColumn>
      <TableHeaderColumn dataField='Balance' dataFormat={priceFormatter} dataSort={true} tdStyle={(f) => f > 0 ? { color: '#00dd24'} : { color: 'red' }}>Balance</TableHeaderColumn>
    </BootstrapTable>
  );

}

const BSTable = props => {

  return (
    <BootstrapTable data={props.data}
      bordered={false}
      hover={false}
      tableHeaderClass='extend-row-white-bg'
      tableBodyClass='extend-row-white-bg'
    >
      <TableHeaderColumn dataField='id' isKey={true} hidden></TableHeaderColumn>
      <TableHeaderColumn dataField='Transaction_Details'>Transaction Details</TableHeaderColumn>
      <TableHeaderColumn dataField='code'>Code</TableHeaderColumn>
      <TableHeaderColumn dataField='where_you_Paid'>Location</TableHeaderColumn>
      <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
      <TableHeaderColumn dataField='balance'>Amount</TableHeaderColumn>
    </BootstrapTable>
  );
}

class TransactionHistoryApp extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.handleDisputebr = this.handleDisputebr.bind(this);
    this.state = {
      transactionSelectValue: {}
    };
  }
  componentWillMount() {
    this.props.getTransactionList();
    this.props.getTransactionHistory();
  }

  handleCheckedAll(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;
    const value = JSON.parse(rowValue);
    var selectedListtoStore = []

    value.map((dataItem) => {
      if (checked) {
        selectedValueArray[dataItem.id] = dataItem;
        this.setState({ transactionSelectValue: selectedValueArray });

      } else if (!(checked)) {
        delete selectedValueArray[dataItem.id];
        this.setState({ transactionSelectValue: selectedValueArray });
      }
    });

    for (var key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }
    this.props.addDispute(selectedListtoStore);
  }

  handleCheckedTrans(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;
    const value = JSON.parse(rowValue);
    var selectedListtoStore = []

    if (checked) {
      selectedValueArray[value.id] = value;
      this.setState({ transactionSelectValue: selectedValueArray });

    } else if (!(checked)) {
      delete selectedValueArray[value.id];
      this.setState({ transactionSelectValue: selectedValueArray });
    }

    for (var key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }

    this.props.addDispute(selectedListtoStore);
  }
  handleDisputebr(){
    this.props.history.push('/MainForm');
  }
  //befor Deploy please comment "wrapper",'row border-bottom white-bg'and wrapper wrapper-content' div. everthing should be in container div
  render() {
    return (
      //<div id="wrapper" className="gray-bg">
      //  <div className="row border-bottom white-bg">
      //  </div>
      //  <div className="wrapper wrapper-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <HelloBar />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <InformationTab />
              </div>
              <div className="col-lg-4">
                <MonthlyIncome />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox float-e-margins">
                  <div className="ibox-title bluetop">
                    <h2>Transaction History</h2>
                  </div>
                  <div className="ibox-content" id="main-contents">
                    <div className="row">
                      <div className="col-md-12">
                        <ProductTable
                          data={this.props.transactionHistories}
                          handleCheckedTrans={this.handleCheckedTrans}
                          handleCheckedAll={this.handleCheckedAll}
                          transactionDisputes={this.props.transactionDisputes}
                          handleDisputebr={this.handleDisputebr} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      //  </div>
      //</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactionLists: state.transactionLists,
    transactionHistories: state.transactionHistories,
    transactionDisputes: state.transactionDisputes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTransactionList: () => {
      dispatch(getTransactionList());
    },
    getTransactionHistory: () => {
      dispatch(getTransactionHistory());
    },
    addDispute: (data) => {
      dispatch(addDispute(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryApp);
