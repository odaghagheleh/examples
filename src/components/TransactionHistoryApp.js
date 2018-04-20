
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { addDispute, getTransactionList, getTransactionHistory } from './../actions/actions';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const SelectBar = props => {

  const transactionList = props.transactionList;
  const selectItem = transactionList.map((transactionItem) =>
    <option key={transactionItem} value={transactionItem}>{transactionItem}</option>
  )
  return (

    <select className="input-sm form-control input-s-sm inline">
      {selectItem}
    </select>

  );
}

const ProductTable = props => {

  function onRowSelect(row, isSelected, e) {
    props.handleCheckedTrans(JSON.stringify(row), isSelected);
  }

  function onSelectAll(isSelected, rows) {
    // console.log(JSON.stringify(rows[i]));
    props.handleCheckedAll(JSON.stringify(rows), isSelected);
  }

  const selected = props.transactionDisputes.map((item) => item.id );

  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect: onRowSelect,
    onSelectAll: onSelectAll,
    selected: selected
  };

  return (
    <BootstrapTable data={props.data} selectRow={selectRowProp} bordered={false} search={true} striped hover pagination>
      <TableHeaderColumn isKey dataField='id' dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField='recentActivity' dataSort={true}>recentActivity</TableHeaderColumn>
      <TableHeaderColumn dataField='type' dataSort={true}>type</TableHeaderColumn>
      <TableHeaderColumn dataField='Description' dataSort={true}>Description</TableHeaderColumn>
      <TableHeaderColumn dataField='Amount' dataSort={true}>Amount</TableHeaderColumn>
      <TableHeaderColumn dataField='Balance' dataSort={true}>Balance</TableHeaderColumn>
    </BootstrapTable>
  );

}

class TransactionHistoryApp extends Component {
  constructor(props) {
    super(props);
    this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
    this.handleCheckedAll = this.handleCheckedAll.bind(this);
    this.state = {
      transactionSelectValue: {}
    };
  }
  componentWillMount() {
    this.props.getTransactionList();
    this.props.getTransactionHistory();
  }

  handleCheckedAll(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;
    const value = JSON.parse(rowValue);
    var selectedListtoStore = []

    value.map((dataItem) => {
      if (checked) {
        selectedValueArray[dataItem.id] = dataItem;
        this.setState({ transactionSelectValue: selectedValueArray });

      } else if (!(checked)) {
        delete selectedValueArray[dataItem.id];
        this.setState({ transactionSelectValue: selectedValueArray });
      }
    });

    for (var key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }
    this.props.addDispute(selectedListtoStore);
  }

  handleCheckedTrans(rowValue, checked) {
    var selectedValueArray = this.state.transactionSelectValue;

    const value = JSON.parse(rowValue);
    var selectedListtoStore = []

    if (checked) {
      selectedValueArray[value.id] = value;
      this.setState({ transactionSelectValue: selectedValueArray });

    } else if (!(checked)) {
      delete selectedValueArray[value.id];
      this.setState({ transactionSelectValue: selectedValueArray });
    }
    
    for (var key in selectedValueArray) {
      selectedListtoStore.push(selectedValueArray[key]);
    }

    this.props.addDispute(selectedListtoStore);
  }

  render() {
    let wrapperclassName = "gray-bg " + this.props.location.pathname;
    return (
      <div id="wrapper">
        <div id="page-wrapper" className={wrapperclassName}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ibox float-e-margins">
                  <div className="ibox-title">
                    <h2>Dispute Credit Transaction</h2>
                    <div className="ibox-tools">
                      <a className="collapse-link">
                        <i className="fa fa-chevron-up"></i>
                      </a>
                    </div>
                  </div>
                  <div className="ibox-content" id="main-contents">
                    <div className="row">
                      <div className="col-sm-5 m-b-xs">
                        <SelectBar transactionList={this.props.transactionLists} />
                      </div>
                      <div className="col-sm-4 m-b-xs">
                      </div>
                      <div className="col-sm-3">
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <br />
                        <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.history.push('/MainForm')} >Dispute</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <ProductTable
                          data={this.props.transactionHistories}
                          handleCheckedTrans={this.handleCheckedTrans}
                          handleCheckedAll={this.handleCheckedAll}
                          transactionDisputes={this.props.transactionDisputes} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {console.log(JSON.stringify(this.props.transactionLists))}
        {console.log(JSON.stringify(this.props.transactionHistories))} */}
        {/* {console.log(JSON.stringify(this.props.transactionDisputes))} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactionLists: state.transactionLists,
    transactionHistories: state.transactionHistories,
    transactionDisputes: state.transactionDisputes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getTransactionList: () => {
      dispatch(getTransactionList());
    },
    getTransactionHistory: () => {
      dispatch(getTransactionHistory());
    },
    addDispute: (data) => {
      dispatch(addDispute(data));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionHistoryApp);



  // const rowsData = props.data.map((dataItem) =>
  //   <tr key={dataItem.id}>
  //     <td>
  //       <input type="checkbox" onChange={props.handleCheckedTrans} value={JSON.stringify(dataItem)} />
  //     </td>
  //     <td>{dataItem.recentActivity}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.type}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.Description}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.Amount}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //     <td>{dataItem.Balance}
  //       <br /><span>{dataItem.extraDescriptions}</span></td>
  //   </tr>

  // );
  // return (
  //   <table className="table table-striped">
  //     <thead>
  //       <tr>
  //         <th></th>
  //         <th>Recent Activity</th>
  //         <th>Type</th>
  //         <th>Description</th>
  //         <th>Amount</th>
  //         <th>Balance</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {rowsData}
  //     </tbody>
  //   </table>
  // );



  // handleCheckedTrans(e) {

  //   var selectedValueArray = this.state.transactionSelectValue;
  //   const target = e.target;
  //   const value = JSON.parse(target.value);

  //   if ((target.checked) && !(selectedValueArray.includes(value.id))) {
  //     selectedValueArray.push(value);
  //     this.setState({ transactionSelectValue: selectedValueArray });

  //   } else if (!(target.checked)) {

  //     selectedValueArray = selectedValueArray.filter(e => e.id !== value.id);
  //     this.setState({ transactionSelectValue: selectedValueArray });
  //   }
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




// class TransactionHistoryApp extends Component {
//   constructor(props) {
//     super(props);
//     this.handleDisputebt = this.handleDisputebt.bind(this);
//     this.handleCheckedTrans = this.handleCheckedTrans.bind(this);
//     this.handleCheckedAll = this.handleCheckedAll.bind(this);
//     this.state = {
//       transactionSelectValue: [],
//       transactionLists: this.props.transactionLists
//     };
//   }
//   componentWillMount() {
//     this.props.getTransactionList();
//     this.props.getTransactionHistory();
//   }
//   // componentDidUpdate() {
//   //   if (!(this.state.transactionLists == this.props.transactionLists)) {
//   //     this.setState({
//   //       transactionLists: this.props.transactionLists
//   //     });
//   //   }
//   //   if (!(this.state.transactionHistories == this.props.transactionHistories)) {
//   //     this.setState({
//   //       transactionHistories: this.props.transactionHistories
//   //     });
//   //   }
//   // }
//   handleDisputebt(data) {
//     const stateData = this.props.transactionHistories;

//     var storeData = [];
//     for (var i in stateData) {
//       let j = stateData[i];

//       if (data.includes(j.id)) {
//         storeData.push(j);
//       }
//     }
//     this.props.addDispute(data);
//     this.props.history.push('/MainForm');
//   }

//   handleCheckedAll(rowValue, checked) {
//     var selectedValueArray = this.state.transactionSelectValue;

//     const value = JSON.parse(rowValue);

//     value.map((dataItem) => {
//       if ((checked) && !(selectedValueArray.includes(dataItem.id))) {
//         selectedValueArray.push(dataItem);
//         this.setState({ transactionSelectValue: selectedValueArray });
//         this.props.addDispute(value);

//       } else if (!(checked)) {
//         selectedValueArray = selectedValueArray.filter(e => e.id !== dataItem.id);
//         this.setState({ transactionSelectValue: selectedValueArray });
//         this.props.addDispute(value);
//       }
//     }
//     );
//   }

//   handleCheckedTrans(rowValue, checked) {
//     var selectedValueArray = this.state.transactionSelectValue;

//     const value = JSON.parse(rowValue);

//     if ((checked) && !(selectedValueArray.includes(value.id))) {
//       selectedValueArray.push(value);
//       this.setState({ transactionSelectValue: selectedValueArray });
//       this.props.addDispute(value);

//     } else if (!(checked)) {
//       selectedValueArray = selectedValueArray.filter(e => e.id !== value.id);
//       this.setState({ transactionSelectValue: selectedValueArray });
//       this.props.addDispute(value);
//     }
//   }

//   render() {
//     let wrapperclassName = "gray-bg " + this.props.location.pathname;
//     return (
//       <div id="wrapper">
//         <div id="page-wrapper" className={wrapperclassName}>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="ibox float-e-margins">
//                   <div className="ibox-title">
//                     <h2>Dispute Credit Transaction</h2>
//                     <div className="ibox-tools">
//                       <a className="collapse-link">
//                         <i className="fa fa-chevron-up"></i>
//                       </a>
//                     </div>
//                   </div>
//                   <div className="ibox-content" id="main-contents">
//                     <div className="row">
//                       <div className="col-sm-5 m-b-xs">
//                         <SelectBar transactionList={this.props.transactionLists} />
//                       </div>
//                       <div className="col-sm-4 m-b-xs">
//                       </div>
//                       <div className="col-sm-3">
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-sm-12">
//                         <br />
//                         <button type="button" className="btn btn-primary btn-sm" onClick={() => this.handleDisputebt(this.state.transactionSelectValue)} >Dispute</button>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-sm-12">
//                         <ProductTable data={this.props.transactionHistories} handleCheckedTrans={this.handleCheckedTrans} handleCheckedAll={this.handleCheckedAll} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* {console.log(JSON.stringify(this.props.transactionLists))}
//         {console.log(JSON.stringify(this.props.transactionHistories))} */}
//         {console.log(JSON.stringify(this.props.transactionDisputes))}
//       </div>
//     );
//   }
// }