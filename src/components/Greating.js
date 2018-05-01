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
                <div class="row">
                    <div class="col-md-6">
                        <p>Account Number </p>
                        <h2><b>XXXX-XXXX-XXXX-1234</b></h2>
                        <p>Show Full Account Number:</p>
                    </div>
                    <div class="col-md-6 text-right">
                        <h1 class="m-xs">$ 210,660</h1>

                        <h3 class="font-bold no-margins">
                            Monthly income
                            </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Greating;