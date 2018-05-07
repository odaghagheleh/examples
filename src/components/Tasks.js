
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { getTasks, setTask } from './../actions/actions'

import NavigationBar from './static/NavigationBar';
import InfoPage from './static/InfoPage';


const TasksTable = props => {

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

    const selected = props.setTasks.map((item) => item.id);

    const stateCol = (cell, row) => {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input type='button' className='btn btn-sm btn-outline btn-danger' onClick={(row) => props.handleStatusBt(row, 'true')} value='Reject' />
                </div>
                <div className="form-group">
                    <input type='button' className='btn btn-sm btn-outline btn-success' onClick={(row) => props.handleStatusBt(row, 'false')} value='Approve' />
                </div>
            </div>
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
            expandableRow={(row) => { return 'true' }}
            expandComponent={(row) => { return (<BSTable data={row.extraDescriptions} />) }}
            striped hover pagination>
            <TableHeaderColumn isKey dataField='id' hidden>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='task' dataSort={true}>Task</TableHeaderColumn>
            <TableHeaderColumn dataField='lastUpload' dataSort={true}>Last Upload</TableHeaderColumn>
            <TableHeaderColumn dataField='typeOfIssues' dataSort={true}>Type Of Issues</TableHeaderColumn>
            <TableHeaderColumn dataField='lastChecked' dataSort={true}>Last Checked</TableHeaderColumn>
            <TableHeaderColumn dataFormat={stateCol}></TableHeaderColumn>
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
            <TableHeaderColumn dataField='code'></TableHeaderColumn>
            <TableHeaderColumn dataField='where_you_Paid'></TableHeaderColumn>
            <TableHeaderColumn dataField='description'></TableHeaderColumn>
        </BootstrapTable>
    );
}

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
        this.handleCheckedAll = this.handleCheckedAll.bind(this);
        this.handleStatusBt = this.handleStatusBt.bind(this);
        this.state = {
            setTasks: {}
        };
    }
    componentWillMount() {
        this.props.getTasks();
    }

    handleCheckedAll(rowValue, checked) {
        var selectedValueArray = this.state.setTasks;
        const value = JSON.parse(rowValue);
        var selectedListtoStore = []

        value.map((dataItem) => {
            if (checked) {
                selectedValueArray[dataItem.id] = dataItem;
                this.setState({ setTasks: selectedValueArray });

            } else if (!(checked)) {
                delete selectedValueArray[dataItem.id];
                this.setState({ setTasks: selectedValueArray });
            }
        });

        for (var key in selectedValueArray) {
            selectedListtoStore.push(selectedValueArray[key]);
        }
        this.props.setTask(selectedListtoStore);
    }

    handleCheckedTrans(rowValue, checked) {
        var selectedValueArray = this.state.setTasks;

        const value = JSON.parse(rowValue);
        var selectedListtoStore = []

        if (checked) {
            selectedValueArray[value.id] = value;
            this.setState({ setTasks: selectedValueArray });

        } else if (!(checked)) {
            delete selectedValueArray[value.id];
            this.setState({ setTasks: selectedValueArray });
        }

        for (var key in selectedValueArray) {
            selectedListtoStore.push(selectedValueArray[key]);
        }

        this.props.setTask(selectedListtoStore);
    }

    handleStatusBt(row, value) {
        var selectedValueArray = this.props.setTasks;

        for (var key in selectedValueArray) {
            if (selectedValueArray[key].id === row.id) {
                selectedValueArray[key]['status'] = value;
            }
        }
        this.props.setTask(selectedValueArray);
    }


    render() {
        return (

            <div id="wrapper" class="gray-bg">

                <div >
                    <div class="row border-bottom white-bg">
                        <NavigationBar />
                    </div>

                    <div class="wrapper wrapper-content">
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
                                            <h2>Engage | Tasks</h2>
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
                                                    <TasksTable
                                                        data={this.props.tasks}
                                                        handleCheckedTrans={this.handleCheckedTrans}
                                                        handleCheckedAll={this.handleCheckedAll}
                                                        handleStatusBt={this.handleStatusBt}
                                                        setTasks={this.props.setTasks} />
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
        tasks: state.tasks,
        setTasks: state.setTasks
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTasks: () => {
            dispatch(getTasks());
        },
        setTask: (data) => {
            dispatch(setTask(data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
