import React, { Component } from 'react';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ProductTable extends Component {
    constructor(props) {
        super(props);

        const columns = [

            {
                Header: "Check",
                accessor: "id",
                Cell: props => <input type="checkbox" onChange={this.props.handleCheckedTrans} value={props.value} />
            },
            {
                Header: "Recent Activity",
                accessor: "recentActivity"
            },
            {
                Header: "Type",
                accessor: "type"
            },
            {
                Header: 'Description',
                accessor: "Description"
            },
            {
                Header: 'Amount',
                accessor: "Amount"
            },
            {
                Header: 'Balance',
                accessor: "Balance"
            }
        ];

        this.state = {
            data: this.props.data,
            columns: columns
        }

    }
    render() {
        return (

            <ReactTable
                data={this.state.data}
                columns={this.state.columns}
                defaultPageSize={10}
                className="-striped -highlight"
                filterable="true"
            />


        );

    }
}