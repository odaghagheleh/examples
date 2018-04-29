import React, { Component } from 'react';




const HelloBar = (props) => {

    var today = new Date();
    today = JSON.stringify(today);
    return (
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <div className='row'>
                    <div className='col-md-6'>
                        <h2> Hi Kevin!</h2>
                    </div>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-4'>
                        <p>Your last access, {today}</p>
                    </div>
                </div>
            </div>
            <div class="ibox-content">
                <p>Customer Account Number <br />
                    <b>ABCD-0001</b>
                </p>
            </div>
        </div>
    );
}


export default HelloBar;
