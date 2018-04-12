import React, { Component } from 'react';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ProductTable extends Component {
    constructor(props) {
        super(props);

        const rowsData = this.props.data.map((dataItem) =>
            <tr key={dataItem.id}>
                <td>
                    <input type="checkbox" class="i-checks" name="input[]" onChange={this.props.handleCheckedTrans} value={JSON.stringify(dataItem)} />
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


        this.state = {
            data: this.props.data,
            rowsData: rowsData

        }

    }
    render() {
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
                <tr>

                </tr>
                <tbody>
                    {this.state.rowsData}
                </tbody>
            </table>
        );

    }
}


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