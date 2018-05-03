/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setCurrentStep } from '../actions/stepper';
import StepZilla from '../steps/main'
import '../steps/css/main.css'
import DisputeCreditTransaction from './DisputeCreditTransaction';
import DecisionQuestionApp from './DecisionQuestionApp';
import CreditCardQuestionnaire from './CreditCardQuestionnaire';
import AdditionalQuestionnaire from './AdditionalQuestionnaire';
import ExtraInfo from './ExtraInfo';
import DisputeConfirmation from './DisputeConfirmation';
import Confirmed from './Confirmed';
import Stepper from './Stepper';
import ProgressBar from './ProgressBar';

const MainForm = props => {
    const steps =
        [
            { name: 'Step 1', component: <DisputeCreditTransaction history={props.history} /> },
            { name: 'Step 2', component: <DecisionQuestionApp history={props.history} /> },
            { name: 'QUESTIONNAIRE', component: <CreditCardQuestionnaire /> },
            { name: 'Step 4', component: <AdditionalQuestionnaire /> },
            { name: 'Step 5', component: <ExtraInfo /> },
            { name: 'CONFIRMATION', component: <DisputeConfirmation /> },
            { name: 'SUBMIT', component: <Confirmed /> }
        ]

    return (
        <div id="wrapper" className="gray-bg">
            <div className="row border-bottom white-bg">
            </div>
            <div className="wrapper wrapper-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox float-e-margins">
                                <div className="ibox-title bluetop">
                                    <h2>Dispute Credit Transaction</h2>
                                </div>
                                <div className="ibox-content">
                                    <div className='example' className="row"  >
                                        <div className="col-lg-12">
                                            <div className='step-progress' id='main-contents'>

                                                <ProgressBar />
                                                <StepZilla
                                                    steps={steps}
                                                    nextButtonCls="btn btn-prev btn-primary btn-sm pull-right stepZillNextabt"
                                                    backButtonCls="btn btn-next btn-primary btn-sm pull-left stepZillRightabt"
                                                    nextTextOnFinalActionStep="Submit"
                                                    prevBtnOnLastStep={false}
                                                    stepsNavigation={false}
                                                    showNavigation={false}
                                                    showSteps={false}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setCurrentStep: (step) => dispatch(setCurrentStep(step)),
    }
};

export default connect(null, mapDispatchToProps)(MainForm);
