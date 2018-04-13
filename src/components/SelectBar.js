
import React, { Component } from 'react';


export default function SelectBar(props) {

    const transactionList = props.transactionList;
    const selectItem = transactionList.map((transactionItem) =>
        <option key={transactionItem} value={transactionItem}>{transactionItem}</option>
    )
    return (

        <select class="input-sm form-control input-s-sm inline" value={props.transactionSelectValue}>
            {selectItem}
        </select>

    );
}