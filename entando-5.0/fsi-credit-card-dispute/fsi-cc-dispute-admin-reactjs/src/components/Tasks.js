
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { getTasks, setTask } from './../actions/actions';

import NavigationBar from './static/NavigationBar';
import InfoPage from './static/InfoPage';


const TasksTable = (props) => {
  function onRowSelect(row, isSelected, e) {
    props.handleCheckedTrans(JSON.stringify(row), isSelected);
  }

  function onSelectAll(isSelected, rows) {
    props.handleCheckedAll(JSON.stringify(rows), isSelected);
  }
  const expandComponent = row => (
    <BSTable data={row.extraDescriptions} />
  );
  const isExpandableRow = row => 'true';

  const selected = props.setTasks.map(item => item.id);

  const stateCol = (cell, row) => (
    <div className="form-inline">
      <div className="form-group">
        <input type="button" className="btn btn-sm btn-outline btn-danger" onClick={row => props.handleStatusBt(row, 'true')} value="Reject" />
      </div>
      <div className="form-group">
        <input type="button" className="btn btn-sm btn-outline btn-success" onClick={row => props.handleStatusBt(row, 'false')} value="Approve" />
      </div>
    </div>
  );

  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true,
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
      tableHeaderClass="row-white-bg"
      tableBodyClass="row-white-bg"
      trClassName="row-hover"
      options={options}
      bordered={false}
      search
      selectRow={selectRowProp}
      expandableRow={row => 'true'}
      expandComponent={row => (<BSTable data={row.extraDescriptions} />)}

      pagination
    >
      <TableHeaderColumn isKey dataField="id" hidden>ID</TableHeaderColumn>
      <TableHeaderColumn dataField="task" dataSort>Task</TableHeaderColumn>
      <TableHeaderColumn dataField="lastUpload" dataSort>Last Upload</TableHeaderColumn>
      <TableHeaderColumn dataField="typeOfIssues" dataSort>Type Of Issues</TableHeaderColumn>
      <TableHeaderColumn dataField="lastChecked" dataSort>Last Checked</TableHeaderColumn>
      <TableHeaderColumn dataFormat={stateCol} />
    </BootstrapTable>
  );
};

const BSTable = props => (
  <BootstrapTable
    data={props.data}
    bordered={false}
    hover={false}
    tableHeaderClass="extend-row-white-bg"
    tableBodyClass="extend-row-white-bg"
  >
    <TableHeaderColumn dataField="id" isKey hidden />
    <TableHeaderColumn dataField="Transaction_Details">Transaction Details</TableHeaderColumn>
    <TableHeaderColumn dataField="code">Code</TableHeaderColumn>
    <TableHeaderColumn dataField="where_you_Paid">Location</TableHeaderColumn>
    <TableHeaderColumn dataField="description">Description</TableHeaderColumn>
  </BootstrapTable>
);

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.handleStatusBt = this.handleStatusBt.bind(this);
    this.state = {
      setTasks: {},
    };
  }
  componentWillMount() {
    this.props.getTasks();
  }

  handleCheckedAll(rowValue, checked) {
    const selectedValueArray = this.state.setTasks;
    const value = JSON.parse(rowValue);
    const selectedListtoStore = [];

    value.map((dataItem) => {
      if (checked) {
        selectedValueArray[dataItem.id] = dataItem;
        this.setState({ setTasks: selectedValueArray });
      } else if (!(checked)) {
        delete selectedValueArray[dataItem.id];
        this.setState({ setTasks: selectedValueArray });
      }
    });

    for (const key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }
    this.props.setTask(selectedListtoStore);
  }

  handleCheckedTrans(rowValue, checked) {
    const selectedValueArray = this.state.setTasks;

    const value = JSON.parse(rowValue);
    const selectedListtoStore = [];

    if (checked) {
      selectedValueArray[value.id] = value;
      this.setState({ setTasks: selectedValueArray });
    } else if (!(checked)) {
      delete selectedValueArray[value.id];
      this.setState({ setTasks: selectedValueArray });
    }

    for (const key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }

    this.props.setTask(selectedListtoStore);
  }

  handleStatusBt(row, value) {
    const selectedValueArray = this.props.setTasks;

    for (const key in selectedValueArray) {
      if (selectedValueArray[key].id === row.id) {
        selectedValueArray[key].status = value;
      }
    }
    this.props.setTask(selectedValueArray);
  }


  render() {
    return (

      <div id="wrapper" className="gray-bg">

        <div >
          <div className="row border-bottom white-bg">
            <NavigationBar />
          </div>

          <div className="wrapper wrapper-content">
            <div className="container">

              <div className="row">
                <div className="col-lg-12">
                  <InfoPage />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="ibox float-e-margins">
                    <div className="ibox-title">
                      <h2>Dispute details</h2>
                      <div className="ibox-tools">
                        <a className="collapse-link">
                          <i className="fa fa-chevron-up" />
                        </a>
                      </div>
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
                          <TasksTable
                            data={this.props.tasks}
                            handleCheckedTrans={this.handleCheckedTrans}
                            handleCheckedAll={this.handleCheckedAll}
                            handleStatusBt={this.handleStatusBt}
                            setTasks={this.props.setTasks}
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
  tasks: state.workTasks,
  setTasks: state.workTasks,
});
const mapDispatchToProps = dispatch => ({
  getTasks: () => {
    dispatch(getTasks());
  },
  setTask: (data) => {
    dispatch(setTask(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
