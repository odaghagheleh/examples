import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTotalSteps, setCurrentStep, stepUp, stepDown } from '../actions/stepper';


class Stepper extends Component {
    componentWillMount() {
        if (this.props.onWillMount) {
            this.props.onWillMount();
        }
    }

    render() {
        const { steps, currentStep, gotoNextStep, gotoPrevStep } = this.props;
        if (!steps) {
            return null;
        }

        const isConfirmStep = (currentStep === steps.length - 2 );
        const isLastStep = (currentStep === steps.length - 1 );

        const progressBarSteps = steps.map((step, i) => {
            let statusClass;
            if (i < currentStep) {
                statusClass = 'progtrckr-done';
            } else if (i > currentStep) {
                statusClass = 'progtrckr-todo';
            } else {
                statusClass = 'progtrckr-doing';
            }
            return <li className={`${statusClass} no-hl`} value={`${i}`}><em>{i+1}</em><span>{step.name}</span></li>;
        });

        const buttonsFooter = currentStep >= steps.length - 1 ? null : (
            <div className="footer-buttons">
                {currentStep === 0 ? null : (
                    <button
                      className="btn btn-next btn-primary btn-sm pull-left"
                      onClick={gotoPrevStep}
                      disabled={currentStep <= 0}
                    >
                        Previous
                    </button>
                )}
                <button
                    className="btn btn-prev btn-primary btn-sm pull-right"
                    onClick={isLastStep ? () => alert() : gotoNextStep}
                    disabled={currentStep >= steps.length}
                >
                    { isConfirmStep ? 'Submit' : 'Next' }
                </button>
            </div>
        );

        return (
          <div className="multi-step">
              <ol className="progtrckr">
                  { progressBarSteps }
              </ol>
              <div className="stepper-content">
                  { steps[currentStep].component }
              </div>
              { buttonsFooter }
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentStep: state.stepper.currentStep,
        totalSteps: state.stepper.totalSteps
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onWillMount: (payload) => {
            dispatch(setTotalSteps(ownProps.steps.length));
            dispatch(setCurrentStep(0));
        },
        gotoNextStep: () => dispatch(stepUp()),
        gotoPrevStep: () => dispatch(stepDown()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
