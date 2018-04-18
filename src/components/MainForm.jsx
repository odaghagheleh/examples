import React, { Component } from 'react';
import StepZilla from '../steps/main'
import DisputeCreditTransaction from './DisputeCreditTransaction';
import CreditCardQuestionnaire from './CreditCardQuestionnaire';
import AdditionalQuestionnaire from './AdditionalQuestionnaire';
import ExtraInfo from './ExtraInfo';


export default class MainForm extends Component {
    render() {
        const steps =
            [
                { name: 'Step 1', component: <DisputeCreditTransaction /> },
                { name: 'Step 2', component: <CreditCardQuestionnaire /> }
            ]
        return (
            <div className='example'>
                <div className='step-progress'>
                    <StepZilla
                        steps={steps}
                        preventEnterSubmission={true}
                        nextTextOnFinalActionStep={"Save"}
                    />
                </div>
            </div>
        )
    }

}