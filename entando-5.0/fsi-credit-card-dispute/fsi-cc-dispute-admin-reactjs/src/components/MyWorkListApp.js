
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { getWorkList, addWorkTask } from './../actions/actions';


import NavigationBar from './static/NavigationBar';
import PerformanceBar from './static/PerformanceBar';
import ReviewTime from './static/ReviewTime';
import PersonRanking from './static/PersonRanking';
import MiddleDashboard from './static/MiddleDashboard';


const ProductTable = (props) => {
  function onRowSelect(row, isSelected, e) {
    props.handleCheckedTrans(JSON.stringify(row), isSelected);
  }

  function onSelectAll(isSelected, rows) {
    props.handleCheckedAll(JSON.stringify(rows), isSelected);
  }

  const selected = props.workTasks.map(item => item.id);

  const selectRowProp = {
    mode: 'checkbox',
    // clickToSelect: true,
    // clickToExpand: true,
    onSelect: onRowSelect,
    onSelectAll,
    selected,
  };
  const options = {
    sizePerPage: 5,
  };

  return (
    <BootstrapTable
      data={props.data}
      tableHeaderClass="tableheader"
      tableBodyClass="tableheader"
      trClassName="row-hover"
      options={options}
      bordered={false}
      search
      selectRow={selectRowProp}
      striped
      hover
      pagination
    >
      <TableHeaderColumn isKey dataField="id" dataSort hidden>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="task" dataSort>Task</TableHeaderColumn>
      <TableHeaderColumn dataField="customerName" dataSort>Customer Name</TableHeaderColumn>
      <TableHeaderColumn dataField="typeOfDispute" dataSort>Type Of Dispute</TableHeaderColumn>
      <TableHeaderColumn dataFormat={(cell, row) =>
        (<input
          type="button"
          className="btn btn-sm btn-outline pull-right btn-success"
          onClick={() => props.history.push('/Tasks')}
          value="open"
        />)}
      >
      </TableHeaderColumn>
    </BootstrapTable>
  );
};

class MyWorkListApp extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.state = {
      workTasks: {},
    };
  }
  componentWillMount() {
    this.props.getWorkList();
  }

  handleCheckedAll(rowValue, checked) {
    const selectedValueArray = this.state.workTasks;
    const value = JSON.parse(rowValue);
    const selectedListtoStore = [];

    value.map((dataItem) => {
      if (checked) {
        selectedValueArray[dataItem.id] = dataItem;
        this.setState({ workTasks: selectedValueArray });
      } else if (!(checked)) {
        delete selectedValueArray[dataItem.id];
        this.setState({ workTasks: selectedValueArray });
      }
    });

    for (const key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }
    this.props.addWorkTask(selectedListtoStore);
  }

  handleCheckedTrans(rowValue, checked) {
    const selectedValueArray = this.state.workTasks;

    const value = JSON.parse(rowValue);
    const selectedListtoStore = [];

    if (checked) {
      selectedValueArray[value.id] = value;
      this.setState({ workTasks: selectedValueArray });
    } else if (!(checked)) {
      delete selectedValueArray[value.id];
      this.setState({ workTasks: selectedValueArray });
    }

    for (const key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }

    this.props.addWorkTask(selectedListtoStore);
  }

  render() {
    return (
      <div>

        <div id="wrapper" className="gray-bg">
          <div className="row border-bottom white-bg">
            <NavigationBar />
          </div>

          <div className="wrapper wrapper-content">
            <div className="container">

              <div className="row">
                <div className="col-md-12">
                  <div className="ibox float-e-margins">
                    <div className="ibox-title">
                      <h2>Hi Chandler B. </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <PerformanceBar />
                </div>
                <div className="col-md-4">
                  <ReviewTime />
                </div>
              </div>

              <div className="row">
                <div className="col-md-8">
                  <MiddleDashboard />
                </div>
                <div className="col-md-4">
                  <PersonRanking />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="ibox float-e-margins">
                    <div className="ibox-title">
                      <h2>My Worklist</h2>
                    </div>
                    <div className="ibox-content" id="main-contents">
                      <div className="row">
                        <div className="col-sm-5 m-b-xs" />
                        <div className="col-sm-4 m-b-xs" />
                        <div className="col-sm-3" />
                      </div>
                      <div className="row">
                        <div className="col-sm-12" />
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <ProductTable
                            data={this.props.workLists}
                            handleCheckedTrans={this.handleCheckedTrans}
                            handleCheckedAll={this.handleCheckedAll}
                            history={this.props.history}
                            workTasks={this.props.workTasks}
                          />
                        </div>
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

const mapStateToProps = state => ({
  workLists: state.workLists,
  workTasks: state.workTasks,
});
const mapDispatchToProps = dispatch => ({
  getWorkList: () => {
    dispatch(getWorkList());
  },
  addWorkTask: (data) => {
    console.log(data);
    dispatch(addWorkTask(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(MyWorkListApp);
