import React, { Component } from 'react';
import { connect } from 'react-redux';

const ProgressBar = props => {
    console.log(props);
    return (
        <div className="ProgressBar">
            <div className="">
            ciao bello
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        currentStep: state.stepper.currentStep,
    }
};

export default connect(mapStateToProps, null)(ProgressBar);
