import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProgressBar = props => {

    return (
        <div className="ProgressBar">
        <div class="ProgressBar__flex">
        <div class="row">
        <span class="ProgressBar__item">1 <span className="ProgressBar__name"> bello</span></span>
        </div>
        <div class="row">
        <span class="ProgressBar__item">2 <span className="ProgressBar__name"> alllao</span></span>
        </div>
        <div class="row">
        <span class="ProgressBar__item">3 <span className="ProgressBar__name"> ollol</span></span>
        </div>
        </div>
        </div>

    )
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         setCurrentStep: (step) => dispatch(setCurrentStep(step)),
//     }
// };

export default ProgressBar;
