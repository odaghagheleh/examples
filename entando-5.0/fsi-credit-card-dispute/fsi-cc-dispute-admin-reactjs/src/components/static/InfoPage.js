import { Row, Col, Container } from 'react-grid-system';
import React, { Component } from 'react';


const infoPage = props => (
  <div className="ibox float-e-margins">
    <div className="ibox-content">
      <div className="row">
        <div className="col-md-4">
          <p><strong> Customer | Account Created </strong> <br />
                            July 14, 2013
          </p>
        </div>
        <div className="col-md-4" />
        <div className="col-md-4">
          <p><strong>ID</strong><br />
                            July 14, 2013
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <p><strong>Customer Info</strong><br />
            <b> Name </b> <br />
                            Kevin Smith
          </p>
        </div>
        <div className="col-md-4">
          <br />
          <p><b> Phone </b> <br />
                            055 12394890
          </p>
        </div>
        <div className="col-md-4">
          <br />
          <p><b> email </b> <br />
                            vinsmith@interstellar.com
          </p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <p><strong>Company Info</strong><br />
            <b> Country </b> <br />
                            UK
          </p>
        </div>
        <div className="col-md-4">
          <br />
          <p><b> Sector  </b> <br />
                            IT
          </p>
        </div>
        <div className="col-md-4">
          <br />
          <p><b> sub-industry  </b> <br />
                            IT Consulting
          </p>
        </div>
      </div>
    </div>
  </div>

);


export default infoPage;
