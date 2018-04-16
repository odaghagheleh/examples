
import React, { Component } from 'react';

import SelectBar from './SelectBar'
import ProductTable from './ProductTable'


export default class TransactionHistoryApp extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.state = {
      transactionSelectValue: [],
      transactionList: this.props.transactionList,
      data: this.props.data
    };
  }

  handleCheckedTrans(e) {

    var selectedValueArray = this.state.transactionSelectValue;
    const target = e.target;
    const value = JSON.parse(target.value);

    if ((target.checked) && !(selectedValueArray.includes(value.id))) {
      selectedValueArray.push(value);
      this.setState({ transactionSelectValue: selectedValueArray });

    } else if (!(target.checked)) {

      selectedValueArray = selectedValueArray.filter(e => e.id !== value.id);
      this.setState({ transactionSelectValue: selectedValueArray });
    }
  }

  handleCheckedAll(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;

    const value = JSON.parse(rowValue);

    value.map((dataItem) => {
      if ((checked) && !(selectedValueArray.includes(dataItem.id))) {
        selectedValueArray.push(dataItem);
        this.setState({ transactionSelectValue: selectedValueArray });

      } else if (!(checked)) {
        selectedValueArray = selectedValueArray.filter(e => e.id !== dataItem.id);
        this.setState({ transactionSelectValue: selectedValueArray });
      }
    }
    );

    console.log(JSON.stringify(selectedValueArray));
  }

  render() {
    const { dispatch, visibleTodos } = this.props
    return (

      <div class="row">
        <div class="col-lg-12">
          <div class="ibox float-e-margins">
            <div class="ibox-title">
              <h5>Transaction History</h5>
              <div class="ibox-tools">
                <a class="collapse-link">
                  <i class="fa fa-chevron-up"></i>
                </a>
              </div>
            </div>
            <div class="ibox-content">
              <div class="row">
                <div class="col-sm-5 m-b-xs">
                  <SelectBar transactionList={this.state.transactionList} transactionSelectValue={this.state.transactionSelectValue} />
                </div>
                <div class="col-sm-4 m-b-xs">
                </div>
                <div class="col-sm-3">
                  <div class="input-group"><input type="text" placeholder="Search" class="input-sm form-control" /> <span class="input-group-btn">
                    <button type="button" class="btn btn-sm btn-primary"> Go!</button> </span></div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <br />
                  <button type="button" class="btn btn-primary btn-sm" onClick={() => this.props.handleDisputebt(this.state.transactionSelectValue)} >Dispute</button>
                </div>
              </div>
              <div class="table-responsive">
                <ProductTable data={this.state.data} handleCheckedTrans={this.handleCheckedTrans} handleCheckedAll={this.handleCheckedAll} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




  // handleCheckedTrans(rowValue, checked) {
  //   var selectedValueArray = this.state.transactionSelectValue;

  //   const value = JSON.parse(rowValue);

  //   if ((checked) && !(selectedValueArray.includes(value.id))) {
  //     selectedValueArray.push(value);
  //     this.setState({ transactionSelectValue: selectedValueArray });

  //   } else if (!(checked)) {
  //     selectedValueArray = selectedValueArray.filter(e => e.id !== value.id);
  //     this.setState({ transactionSelectValue: selectedValueArray });
  //   }
  //   // console.log(JSON.stringify(selectedValueArray));
  // }


// handleCheckedTrans(rowValue, e) {
//   console.log(JSON.stringify(rowValue));
//   var selectedValueArray = this.state.transactionSelectValue;
//   const target = e.target;
//   const value = JSON.parse(rowValue);

//   if ((target.checked) && !(selectedValueArray.includes(value.id))) {
//     selectedValueArray.push(value);
//     this.setState({ transactionSelectValue: selectedValueArray });

//   } else if (!(target.checked)) {

//     selectedValueArray = selectedValueArray.filter(e => e !== value);
//     this.setState({ transactionSelectValue: selectedValueArray });
//   }
// }