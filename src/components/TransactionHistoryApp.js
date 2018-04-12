
import React, { Component } from 'react';

import SelectBar from './SelectBar'
import ProductTable from './ProductTable'


export default class TransactionHistoryApp extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.state = {
      transactionSelectValue: [],
      transactionList: this.props.transactionList,
      data: this.props.data
    };
  }


  handleCheckedTrans(event) {

    var selectedValueArray = this.state.transactionSelectValue;
    const target = event.target;
    const value = JSON.parse(target.value);

    if ((target.checked) && !(selectedValueArray.includes(value.id))) {
      selectedValueArray.push(value);
      this.setState({ transactionSelectValue: selectedValueArray });

    } else if (!(target.checked)) {

      selectedValueArray = selectedValueArray.filter(e => e !== value);
      this.setState({ transactionSelectValue: selectedValueArray });
    }
  }

  render() {
    const { dispatch, visibleTodos } = this.props
    return (
      <div class="container">
        <SelectBar transactionList={this.state.transactionList} transactionSelectValue={this.state.transactionSelectValue} />
        <div class="row">
          <div class="col-sm-12">
            <button type="button" class="btn btn-primary btn-sm" onClick={() => this.props.handleDisputebt(this.state.transactionSelectValue)} >Dispute</button>
          </div>
        </div>
        <ProductTable data={this.state.data} handleCheckedTrans={this.handleCheckedTrans} />
      </div>
    );
  }
}