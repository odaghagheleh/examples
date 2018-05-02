
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { getWorkList, addWorkTask } from './../actions/actions'


import NavigationBar from './static/NavigationBar';
import PerformanceBar from './static/PerformanceBar';
import ReviewTime from './static/ReviewTime';
import PersonRanking from './static/PersonRanking';
import MiddleDashboard from './static/MiddleDashboard';


const ProductTable = props => {

  function onRowSelect(row, isSelected, e) {
    props.handleCheckedTrans(JSON.stringify(row), isSelected);
  }

  function onSelectAll(isSelected, rows) {
    props.handleCheckedAll(JSON.stringify(rows), isSelected);
  }

  const selected = props.workTasks.map((item) => item.id);

  const selectRowProp = {
    mode: 'checkbox',
    // clickToSelect: true,
    // clickToExpand: true,
    onSelect: onRowSelect,
    onSelectAll: onSelectAll,
    selected: selected
  };
  const options = {
    sizePerPage: 5
  }

  return (
    <BootstrapTable data={props.data}
      tableHeaderClass='row-white-bg'
      tableBodyClass='row-white-bg'
      trClassName='row-hover'
      options={options}
      bordered={false}
      search={true}
      selectRow={selectRowProp}
      striped hover pagination>
      <TableHeaderColumn isKey dataField='id' dataSort={true} hidden>ID</TableHeaderColumn>
      <TableHeaderColumn dataField='task' dataSort={true}>Task</TableHeaderColumn>
      <TableHeaderColumn dataField='customerName' dataSort={true}>Customer Name</TableHeaderColumn>
      <TableHeaderColumn dataField='typeOfDispute' dataSort={true}>Type Of Dispute</TableHeaderColumn>
      <TableHeaderColumn dataFormat={(cell, row) => { return <input type='button' className='btn btn-sm btn-outline btn-success' onClick={() => props.history.push('/Tasks')} value='open' /> }}>Action</TableHeaderColumn>
    </BootstrapTable>
  );

}

class MyWorkListApp extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.state = {
      workTasks: {}
    };
  }
  componentWillMount() {
    this.props.getWorkList();
  }

  handleCheckedAll(rowValue, checked) {
    var selectedValueArray = this.state.workTasks;
    const value = JSON.parse(rowValue);
    var selectedListtoStore = []

    value.map((dataItem) => {
      if (checked) {
        selectedValueArray[dataItem.id] = dataItem;
        this.setState({ workTasks: selectedValueArray });

      } else if (!(checked)) {
        delete selectedValueArray[dataItem.id];
        this.setState({ workTasks: selectedValueArray });
      }
    });

    for (var key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }
    this.props.addWorkTask(selectedListtoStore);
  }

  handleCheckedTrans(rowValue, checked) {
    var selectedValueArray = this.state.workTasks;

    const value = JSON.parse(rowValue);
    var selectedListtoStore = []

    if (checked) {
      selectedValueArray[value.id] = value;
      this.setState({ workTasks: selectedValueArray });

    } else if (!(checked)) {
      delete selectedValueArray[value.id];
      this.setState({ workTasks: selectedValueArray });
    }

    for (var key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }

    this.props.addWorkTask(selectedListtoStore);
  }

  render() {
    return (
      <div id="wrapper">
        <div class="gray-bg">

          <div class="row border-bottom white-bg">
            <NavigationBar />
          </div>

          <div class="wrapper wrapper-content">
            <div class="container">

              <div class="row">
                <div class="col-md-12">
                  <div class="ibox float-e-margins">
                    <div class="ibox-title">
                      <h2>Hi Chandler B. </h2>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-8">
                  <PerformanceBar />
                </div>
                <div class="col-md-4">
                  <ReviewTime />
                </div>
              </div>

              <div class="row">
                <div class="col-md-8">
                  <MiddleDashboard />
                </div>
                <div class="col-md-4">
                  <PersonRanking />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="ibox float-e-margins">
                    <div className="ibox-title">
                      <h2>My Worklist</h2>
                      <div className="ibox-tools">
                        <a className="collapse-link">
                          <i className="fa fa-chevron-up"></i>
                        </a>
                      </div>
                    </div>
                    <div className="ibox-content" id="main-contents">
                      <div className="row">
                        <div className="col-sm-5 m-b-xs">
                        </div>
                        <div className="col-sm-4 m-b-xs">
                        </div>
                        <div className="col-sm-3">
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <ProductTable
                            data={this.props.workLists}
                            handleCheckedTrans={this.handleCheckedTrans}
                            handleCheckedAll={this.handleCheckedAll}
                            history={this.props.history}
                            workTasks={this.props.workTasks} />
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

const mapStateToProps = state => {
  return {
    workLists: state.workLists,
    workTasks: state.workTasks
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getWorkList: () => {
      dispatch(getWorkList());
    },
    addWorkTask: (data) => {
      dispatch(addWorkTask(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyWorkListApp);



      //<div class="ibox float-e-margins">
       // <div class="ibox-title">
       // </div>
      //  <div class="ibox-content">
     //   </div>
     // </div>


