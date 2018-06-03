/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';
import MonthlyIncome from './MonthlyIncome';
import './../css/cssoverride.css'



const Greating = (props) => {

    var today = new Date();
    today = JSON.stringify(today);
    return (
        <div id="wrapper">
            <div className="white-bg">
                <div className="row border-bottom white-bg">
                </div>
                <div className="wrapper wrapper-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-8">

                                <div className="ibox float-e-margins">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="ibox-title">
                                                <h2> Hi Kevin!</h2>
                                            </div>
                                            <div className="ibox-content">
                                                <p>Account Number </p>
                                                <h2><b>XXXX-XXXX-XXXX-1234</b></h2>
                                                <p>Show Full Account Number:</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="monthyIncome">
                                                <div className="widget lazur-bg no-padding monthyIncome">
                                                    <div className="p-m">
                                                        <h1 className="m-xs">$ 210,660</h1>

                                                        <h3 className="font-bold no-margins">
                                                            Monthly income</h3>
                                                        <small>Income form project Beta.</small>
                                                    </div>
                                                    <div className="flot-chart">
                                                        <div className="flot-chart-content" id="flot-chart2"></div>
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