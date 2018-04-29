import { Card, CardBody, CardHeader, Progress } from 'reactstrap';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

const PerformanceBar= (props)=>{

    return (
      <div class="ibox float-e-margins">
        <div class="ibox-title">
          <h3><b> PERFORMANCE </b></h3>
        </div>
        <div class="ibox-content">
          <Progress value="90" />
          <p>Well Done! You completed 2360 task. You have 140 tasks to complete your activities.</p>
        </div>
      </div>

    );
}

export default PerformanceBar;
