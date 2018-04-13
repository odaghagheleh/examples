import React, { Component } from 'react';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default function ProductTable(props) {

    const rowsData = props.data.map((dataItem) =>
        <tr key={dataItem.id}>
            <td>
                <input type="checkbox" onChange={props.handleCheckedTrans} value={JSON.stringify(dataItem)} />
            </td>
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

    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th>Recent Activity</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {rowsData}
            </tbody>
        </table>
    );

}


// function onRowSelect(row, isSelected, e) {
//     props.handleCheckedTrans(JSON.stringify(row), isSelected);
// }

// function onSelectAll(isSelected, rows) {
//     // console.log(JSON.stringify(rows[i]));
//     props.handleCheckedAll(JSON.stringify(rows), isSelected);
// }

// const selectRowProp = {
//     mode: 'checkbox',
//     // clickToSelect: true,
//     onSelect: onRowSelect,
//     onSelectAll: onSelectAll
// };
// return (
//     <BootstrapTable data={props.data} selectRow={selectRowProp} striped hover pagination>
//         <TableHeaderColumn isKey dataField='id' dataSort={true}>Product ID</TableHeaderColumn>
//         <TableHeaderColumn dataField='recentActivity' dataSort={true}>recentActivity</TableHeaderColumn>
//         <TableHeaderColumn dataField='type' dataSort={true}>type</TableHeaderColumn>
//         <TableHeaderColumn dataField='Description' dataSort={true}>Description</TableHeaderColumn>
//         <TableHeaderColumn dataField='Amount' dataSort={true}>Amount</TableHeaderColumn>
//         <TableHeaderColumn dataField='Balance' dataSort={true}>Balance</TableHeaderColumn>
//     </BootstrapTable>
// );

            // <table class="table table-striped">
            //     <thead>
            //         <tr>
            //             <th></th>
            //             <th>Recent Activity</th>
            //             <th>Type</th>
            //             <th>Description</th>
            //             <th>Amount</th>
            //             <th>Balance</th>
            //         </tr>
            //     </thead>
            //     <tr>

            //     </tr>
            //     <tbody>
            //         {this.state.rowsData}
            //     </tbody>
            // </table>

// const rowsData = this.props.data.map((dataItem) =>
// <tr key={dataItem.id}>
//     <td>
//         <input type="checkbox" class="i-checks" name="input[]" onChange={this.props.handleCheckedTrans} value={JSON.stringify(dataItem)} />
//     </td>
//     <td>{dataItem.recentActivity}
//         <br /><span>{dataItem.extraDescriptions}</span></td>
//     <td>{dataItem.type}
//         <br /><span>{dataItem.extraDescriptions}</span></td>
//     <td>{dataItem.Description}
//         <br /><span>{dataItem.extraDescriptions}</span></td>
//     <td>{dataItem.Amount}
//         <br /><span>{dataItem.extraDescriptions}</span></td>
//     <td>{dataItem.Balance}
//         <br /><span>{dataItem.extraDescriptions}</span></td>
// </tr>
// );

// const columns = [

//     {
//         Header: "Check",
//         accessor: "id",
//         Cell: props => <input type="checkbox" onChange={this.props.handleCheckedTrans} value={props.value} />
//     },
//     {
//         Header: "Recent Activity",
//         accessor: "recentActivity"
//     },
//     {
//         Header: "Type",
//         accessor: "type"
//     },
//     {
//         Header: 'Description',
//         accessor: "Description"
//     },
//     {
//         Header: 'Amount',
//         accessor: "Amount"
//     },
//     {
//         Header: 'Balance',
//         accessor: "Balance"
//     }
// ];


// <ReactTasble
// data={this.state.data}
// columns={this.state.columns}
// defaultPageSize={10}
// className="-striped -highlight"
// filterable="true"
// />