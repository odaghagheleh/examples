import { Row, Col, Container } from 'react-grid-system';
import React, { Component } from 'react';


const infoPage = (props) => {
    return (
        <div class="ibox float-e-margins">
            <div class="ibox-content">
                <div class="row">
                    <div class="col-md-4">
                        <p><strong> Customer | Account Created </strong> <br />
                            July 14, 2013</p>
                    </div>
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4">
                        <p><strong>ID</strong><br />
                            July 14, 2013</p>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-md-4">
                        <p><strong>Customer Info</strong><br />
                            <b> Name </b> <br />
                            Kevin Smith</p>
                    </div>
                    <div class="col-md-4">
                        <br />
                        <p><b> Phone </b> <br />
                            055 12394890</p>
                    </div>
                    <div class="col-md-4">
                        <br />
                        <p><b> email </b> <br />
                            vinsmith@interstellar.com</p>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col-md-4">
                        <p><strong>Company Info</strong><br />
                            <b> Country </b> <br />
                            UK</p>
                    </div>
                    <div class="col-md-4">
                        <br />
                        <p><b> Sector  </b> <br />
                            IT</p>
                    </div>
                    <div class="col-md-4">
                        <br />
                        <p><b> sub-industry  </b> <br />
                            IT Consulting</p>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default infoPage;
