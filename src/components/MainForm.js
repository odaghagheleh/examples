import React, { Component } from 'react';
import StepZilla from '../steps/main'
import DisputeCreditTransaction from './DisputeCreditTransaction';
import DecisionQuestionApp from './DecisionQuestionApp';
import CreditCardQuestionnaire from './CreditCardQuestionnaire';
import AdditionalQuestionnaire from './AdditionalQuestionnaire';
import ExtraInfo from './ExtraInfo';
import DisputeConfirmation from './DisputeConfirmation';
import Confirmed from './Confirmed';


const MainForm = props => {
    const steps =
        [
            { name: 'Step 1', component: <DisputeCreditTransaction history={props.history} /> },
            { name: 'Step 2', component: <DecisionQuestionApp /> },
            { name: 'Step 3', component: <CreditCardQuestionnaire /> },
            { name: 'Step 4', component: <AdditionalQuestionnaire /> },
            { name: 'Step 5', component: <ExtraInfo /> },
            { name: 'CONFIRMATION', component: <DisputeConfirmation /> },
            { name: 'SUBMIT', component: <Confirmed /> }
        ]

    let wrapperClass = "gray-bg " + props.location.pathname;
    return (
        <div id="wrapper" >
            <div id="page-wrapper" className={wrapperClass}>
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
                                <div className="ibox-content">
                                    <div className='example' className="row"  >
                                        <div className="col-lg-12">
                                            <div className='step-progress' id="main-contents">
                                                <StepZilla
                                                    steps={steps}
                                                    nextButtonCls="btn btn-prev btn-primary btn-sm pull-right stepZillNextabt"
                                                    backButtonCls="btn btn-next btn-primary btn-sm pull-left stepZillRightabt"
                                                    nextTextOnFinalActionStep="Submit"
                                                    prevBtnOnLastStep={false}
                                                    stepsNavigation={false}
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

export default MainForm;

// onStepChange={ (step) => console.log(step) }