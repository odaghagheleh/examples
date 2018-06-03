import React, { Component } from 'react';

import { getNotifcationHistory } from './../actions/actions';
import   NotificationPopUp   from './../components/NotificationPopUp';

const HelloBar = (props) => {

    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <div className="ibox float-e-margins">
            <div className="ibox-title bluetop">
                <div className='row'>
                    <div className='col-md-6'>
                        <h2> Hi Kevin!<span className="HelloBar__position"><NotificationPopUp /></span></h2>
                    </div>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-4'>
                        <p className="HelloBar__access">Your last access <strong>{date.toLocaleDateString('en-US', options)}</strong></p>
                    </div>
                </div>
            </div>
            <div className="ibox-content">
                <p>Customer Account Number <br />
                    <b>ABCD-0001</b>
                </p>
            </div>
        </div>
    );
}


export default HelloBar;
