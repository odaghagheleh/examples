import { Doughnut, Chart } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import React, { Component } from 'react';

const MiddleDashboard = (props) => {
  const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
  let text;
  Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw() {
      originalDoughnutDraw.apply(this, arguments);

      const chart = this.chart;
      let width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';

      let sum = 0;
      for (let i = 0; i < chart.config.data.datasets[0].data.length; i++) {
        sum += chart.config.data.datasets[0].data[i];
      }

      let text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);
    },
  });

  const chart = { chart: { width: 10 } };

  const leftDonut = {
    labels: [
      'Approved', '',
    ],
    datasets: [{
      data: [60, 40],
      backgroundColor: [
        '#6EC664',
        '#979797',
      ],
      hoverBackgroundColor: [
        '#27AE60',
        '#979797',
      ],
    }],
    text: '60%',

  };


  const middleDonut = {
    labels: [
      'Rejected',
    ],
    datasets: [{
      data: [25, 75],
      backgroundColor: [
        '#D0021B',
        '#979797',

      ],
      hoverBackgroundColor: [
        '#2de6bc',
        '#FF6384',
      ],
    }],
    text: '25%',
  };


  const rightDonut = {
    labels: [
      'Waiting to Review',
    ],
    datasets: [{
      data: [15, 85],
      backgroundColor: [
        '#F5A623',
        '#979797',
      ],
      hoverBackgroundColor: [
        '#2de6bc',
        '#FF6384',
      ],
    }],
    text: '15%',
  };


  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="ibox float-e-margins">
      <div className="ibox-title MiddleDashboard__container ">
        <div className="md_tabsbody">
          <div className="md_tabs">
            <button className="tablinks">Monthly</button>
            <button className="tablinks">Weekly</button>
            <button className="tablinks active">Daily</button>
          </div>
        </div>
      </div>
      <div className="ibox-content">

        <div className="MiddleDashboardBody">
          <div className="row">
            <div className="col-md-4 chart-title">
              <h3>Approved Requests &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-cog" aria-hidden="true" />
              </h3>
              <br /><br /><br /><br />
              <div className="donutChart">
                <Doughnut
                  data={leftDonut}
                  width="200"
                  height="185"
                  options={{ cutoutPercentage: 75, legend: false }}
                />
              </div>

              <div className="chart-legend">
                <div className="colorSquare green" />
                <p> Approved 1416 <br />
                                Total 2360
                </p>
              </div>
            </div>
            <div className="col-md-4 chart-title">
              <h3>Rejected Requests&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-cog" aria-hidden="true" />
              </h3>
              <br /><br /><br /><br />
              <div className="donutChart">
                <Doughnut
                  data={middleDonut}
                  width="200"
                  height="185"
                  options={{ cutoutPercentage: 75, legend: false, rotation: Math.PI }}
                />
              </div>
              <div className="chart-legend">
                <div className="colorSquare red" />
                <p> Rejected 590 <br />
                                Total 2360
                </p>
              </div>
            </div>
            <div className="col-md-4 chart-title">
              <h3>Pending Review&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fa fa-cog" aria-hidden="true" />
              </h3>
              <br /><br /><br /><br />

              <div className="donutChart">
                <Doughnut
                  data={rightDonut}
                  width="200"
                  height="185"
                  options={{ cutoutPercentage: 75, legend: false, rotation: 0.7 * Math.PI }}
                />
              </div>

              <div className="chart-legend">
                <div className="colorSquare orange" />
                <p> Pending 354
                  <br /> Total 2500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MiddleDashboard;
