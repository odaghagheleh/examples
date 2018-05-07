/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';



const InformationTab = (props) => {

    return (
        <div class="ibox float-e-margins ">
            <div class="ibox-title bluetop">
                <h2>Information</h2>
            </div>
            <div class="ibox-content">
                <div className="row">
                    <div className="col-md-6">
                        <p><b>Customer Information</b></p>
                    </div>
                    <div className="col-md-6">
                        <p><b>Primary contact Information</b></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Organization full name <br />
                            <b>Intersteller inc.</b>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>Point of contact <br />
                            <b>21 Forest View - San Francisco, 94016 USA</b>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Internal application ID <br />
                            <b>001002003004</b>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>Phone <br />
                            <b>555-123-9489</b>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Entity Type<br />
                            <b>Corporate</b>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>E-mail <br />
                            <b>kevinsmith@interstellar.com</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default InformationTab;
