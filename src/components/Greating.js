import React, { Component } from 'react';




const Greating = (props) => {

    var today = new Date();
    today = JSON.stringify(today);
    return (
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h2> Hi Kevin!</h2>
            </div>
            <div class="ibox-content">
                <p>Account Number </p>
                <h2><b>ABCD-0001</b></h2>
                <p>Show Full Account Number:</p>
            </div>
        </div>
    );
}


export default Greating;