import React, { Component } from 'react';
import StepZilla from '../steps/main'
import DisputeCreditTransaction from './DisputeCreditTransaction';
import DecisionQuestionApp from './DecisionQuestionApp';
import CreditCardQuestionnaire from './CreditCardQuestionnaire';
import AdditionalQuestionnaire from './AdditionalQuestionnaire';
import ExtraInfo from './ExtraInfo';
import DisputeConfirmation from './DisputeConfirmation';
import Confirmed from './Confirmed';


export default class MainForm extends Component {
    render() {
        const steps =
            [
                { name: 'Step 1', component: <DisputeCreditTransaction history={this.props.history} /> },
                { name: 'Step 2', component: <DecisionQuestionApp /> },
                { name: 'Step 3', component: <CreditCardQuestionnaire /> },
                { name: 'Step 4', component: <AdditionalQuestionnaire /> },
                { name: 'Step 5', component: <ExtraInfo /> },
                { name: 'CONFIRMATION', component: <DisputeConfirmation /> },
                { name: 'SUBMIT', component: <Confirmed /> }
            ]

        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (
            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="ibox float-e-margins">
                                    <div class="ibox-title">
                                        <h2>Dispute Credit Transaction</h2>
                                        <div class="ibox-tools">
                                            <a class="collapse-link">
                                                <i class="fa fa-chevron-up"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="ibox-content">

                                        <div className='example' class="row">
                                            <div class="col-lg-12">
                                                <div className='step-progress'>
                                                    <StepZilla
                                                        steps={steps}
                                                        preventEnterSubmission={true}
                                                        nextTextOnFinalActionStep={"Save"}
                                                        nextButtonCls="btn btn-prev btn-primary btn-sm pull-right"
                                                        backButtonCls="btn btn-next btn-primary btn-sm pull-left"
                                                        nextTextOnFinalActionStep="Submit"
                                                        prevBtnOnLastStep={false}
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

}