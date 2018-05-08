import { Doughnut, Chart } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import React, { Component } from 'react';




const MiddleDashboard = (props) => {


    var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
    var text;
    Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
        draw: function () {
            originalDoughnutDraw.apply(this, arguments);

            var chart = this.chart;
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx;

            var fontSize = (height / 114).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var sum = 0;
            for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
                sum += chart.config.data.datasets[0].data[i];
            }

            var text = chart.config.data.text,
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;

            ctx.fillText(text, textX, textY);
        },


    });

    const chart = { chart: {width: 10}};

    const leftDonut = {
        labels: [
            'Approved', ''
        ],
        datasets: [{
            data: [60, 40],
            backgroundColor: [
                '#6EC664',
                '#979797'
            ],
            hoverBackgroundColor: [
                '#27AE60',
                '#979797'
            ]
        }],
        text: "60%",

    };



    const middleDonut = {
        labels: [
            'Rejected'
        ],
        datasets: [{
            data: [25, 75],
            backgroundColor: [
                '#D0021B',
                '#979797'

            ],
            hoverBackgroundColor: [
                '#2de6bc',
                '#FF6384'
            ]
        }],
        text: "25%"
    };


    const rightDonut = {
        labels: [
            'Waiting to Review'
        ],
        datasets: [{
            data: [15, 85],
            backgroundColor: [
                '#F5A623',
                '#979797'
            ],
            hoverBackgroundColor: [
                '#2de6bc',
                '#FF6384'
            ]
        }],
        text: "15%"
    };




    const options = {
        tooltips: {
            enabled: false,
            custom: CustomTooltips
        },
        maintainAspectRatio: false
    }
    return (
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <div className="md_tabsbody">
                    <div class="md_tabs">
                        <button class="tablinks">Monthly</button>
                        <button class="tablinks">Weekly</button>
                        <button class="tablinks active">Daily</button>
                    </div>
                </div>
            </div>
            <div class="ibox-content">

                <div className="MiddleDashboardBody">
                    <div className="row">
                        <div className="col-md-4 chart-title">
                            <h3>Approved Requests</h3>

                            <div className="donutChart">
                                <Doughnut data={leftDonut} width="100" height="85"  options={{
                                                                       cutoutPercentage: 75, legend: false
                                                            }}/>
                            </div>

                        <div className = "chart-legend">
            <div class="colorSquare green"></div>
                            <p> Approved 1416 <br />
                                Total 2360 </p>
        </div>
                        </div>
                        <div className="col-md-4 chart-title">
                            <h3>Rejected Requests</h3>

                            <div className="donutChart">
                                <Doughnut data={middleDonut} width="100" height="85" options={{
        cutoutPercentage: 75, legend: false, rotation:  Math.PI
    }}/>
                            </div>

        <div className = "chart-legend">
            <div class="colorSquare red"></div>
                            <p> Rejected 590 <br />
                                Total 2360 </p>
        </div>
                        </div>
                        <div className="col-md-4 chart-title">
                            <h3>Pending Review</h3>

                            <div className="donutChart">
                                <Doughnut data={rightDonut} width="100" height="85" options={{
                                                                                        cutoutPercentage: 75, legend: false, rotation:  .7*Math.PI
                                                                                    }}/>
                            </div>

                            <div className = "chart-legend">
            <div class="colorSquare orange"></div>
                                <p> Pending 354 <br />
                                    Total 2500 </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}


export default MiddleDashboard;
