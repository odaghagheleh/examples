/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';




const HelloBar = (props) => {

    // var today = new Date();
    // today = JSON.stringify(today);
    return (
        <div className="ibox float-e-margins">
            <div className="ibox-title bluetop">
                <div className='row'>
                    <div className='col-md-6'>
                        <h2> Hi Kevin!</h2>
                    </div>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-4'>
                        <p>Your last access, Friday 20 October 2017 at 5:00pm</p>
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
