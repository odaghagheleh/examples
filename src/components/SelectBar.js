
import React, { Component } from 'react';


export default function SelectBar(props) {

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
                        <div class="form-group col-sm-4">
                            <label>SHOW</label>
                            <select class="form-control" value={props.transactionSelectValue}>
                                {selectItem}
                            </select>
                        </div>
                        <div class="form-group col-sm-4">
                            <i class="fas fa-print"></i>
                            <i class="fas fa-angle-down"></i>
                        </div>
                    </form>
                </div>
            </div>
            <br />
        </div>
    );
}