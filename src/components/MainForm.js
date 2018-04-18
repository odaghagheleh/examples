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
                { name: 'Step 1', component: <DisputeCreditTransaction history={this.props.history}/> },
                { name: 'Step 2', component: <DecisionQuestionApp /> },
                { name: 'Step 3', component: <CreditCardQuestionnaire /> },
                { name: 'Step 4', component: <AdditionalQuestionnaire /> },
                { name: 'Step 5', component: <ExtraInfo /> },
                { name: 'Step 6', component: <DisputeConfirmation /> },
                { name: 'Step 7', component: <Confirmed /> }
            ]

        let wrapperClass = "gray-bg " + this.props.location.pathname;
        return (

            <div id="wrapper">
                <div id="page-wrapper" className={wrapperClass}>
                    <div className='example'>
                        <div className='step-progress'>
                            <StepZilla
                                steps={steps}
                                preventEnterSubmission={true}
                                nextTextOnFinalActionStep={"Save"}
                                nextButtonCls= "btn btn-prev btn-primary btn-sm pull-right"
                                backButtonCls= "btn btn-next btn-primary btn-sm pull-left"
                                nextTextOnFinalActionStep= "Submit"

                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}