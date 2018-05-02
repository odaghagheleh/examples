/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import MonthlyIncome from './MonthlyIncome';
import './../css/cssoverride.css'



const Greating = (props) => {

    var today = new Date();
    today = JSON.stringify(today);
    return (
        <div id="wrapper">
            <div class="white-bg">
                <div class="row border-bottom white-bg">
                </div>
                <div class="wrapper wrapper-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">

                                <div class="ibox float-e-margins">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="ibox-title">
                                                <h2> Hi Kevin!</h2>
                                            </div>
                                            <div class="ibox-content">
                                                <p>Account Number </p>
                                                <h2><b>XXXX-XXXX-XXXX-1234</b></h2>
                                                <p>Show Full Account Number:</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="monthyIncome">
                                                <div class="widget lazur-bg no-padding monthyIncome">
                                                    <div class="p-m">
                                                        <h1 class="m-xs">$ 210,660</h1>

                                                        <h3 class="font-bold no-margins">
                                                            Monthly income</h3>
                                                        <small>Income form project Beta.</small>
                                                    </div>
                                                    <div class="flot-chart">
                                                        <div class="flot-chart-content" id="flot-chart2"></div>
                                                    </div>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="col-lg-2">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Greating;