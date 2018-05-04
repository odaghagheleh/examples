import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProgressBar = props => {
let step1 = "ProgressBar__list_green"
let step2 = "ProgressBar__list_gray"
let step3 = "ProgressBar__list_gray"

if (props.currentStep === 0 ) {
 step1 = "ProgressBar__list_green"
 step2 = "ProgressBar__list_gray"
 step3 = "ProgressBar__list_gray"
}
else if (props.currentStep != 0 &&  props.currentStep <= 4) {
  step1 = "ProgressBar__list"
  step2 = "ProgressBar__list_green"
  step3 = "ProgressBar__list_gray"
}
else if (props.currentStep === 5) {
  step1 = "ProgressBar__list"
  step2 =  "ProgressBar__list"
  step3 = "ProgressBar__list_green"
}

return (

<ol className="ProgressBar">
  <li>
     <p className={step1}>
     <span className="big">1<span className="smaller">Confirm Transactions</span></span>
     </p>
  </li>
  <li>
     <p className={step2}>
     <span className="big">2<span className="smaller">Questions</span></span>
     </p>
  </li>
  <li>
    <p className={step3}>
    <span className="big">3<span className="smaller">Confirm and Submit</span></span>
    </p>
  </li>
</ol>
)
}

const mapStateToProps = (state) => {
return {
    currentStep: state.stepper.currentStep,
}
};

export default connect(mapStateToProps, null)(ProgressBar);
