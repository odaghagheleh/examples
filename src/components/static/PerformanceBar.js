import { Card, CardBody, CardHeader, Progress } from 'reactstrap';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const PerformanceBar = props => (
  <div className="ibox float-e-margins">
    <div className="ibox-title">
      <h3><b> PERFORMANCE </b></h3>
    </div>
    <div className="ibox-content">
      <div className="col-xs-12">
        <p className="PerformanceBar__performance-bar  pull-right">last updated 3 minutes ago</p>
      </div>
      <br /><br />
      <Progress color="info" value="90" />
      <p className="PerformanceBar__result">Well Done! You have completed 2360 tasks. You have 140 open tasks.</p>
    </div>
  </div>

);

export default PerformanceBar;
