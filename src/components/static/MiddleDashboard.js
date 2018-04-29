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

            var text = "90%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 1.85;

            ctx.fillText(text, textX, textY);
        }
    });

    const leftDonut = {
        labels: [
            'Rejected', 'Approved'
        ],
        datasets: [{
            data: [10, 90],
            backgroundColor: [
                'rgb(202, 15, 15)',
                'rgb(47, 211, 32)'
            ],
            hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384'
            ]
        }],
        text: "90%"
    };



    const middleDonut = {
        labels: [
            'Rejected'
        ],
        datasets: [{
            data: [75, 25],
            backgroundColor: [
                'rgb(47, 211, 32)',
                'rgb(202, 15, 15)'
            ],
            hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384'
            ]
        }]
    };


    const rightDonut = {
        labels: [
            'Waiting to Review'
        ],
        datasets: [{
            data: [75, 25],
            backgroundColor: [
                'rgb(47, 211, 32)',
                'rgb(202, 15, 15)'
            ],
            hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384'
            ]
        }]
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
                        <div className="col-md-4">
                            <h3>Approved Request</h3>
                            <hr />
                            <div className="donutChart">
                                <Doughnut data={middleDonut} width="100" height="85" />
                            </div>
                            <div class="colorSquare red"></div>
                            <p> Rejected. 350 <br />
                                total. 2500 </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Rejected Request</h3>
                            <hr />
                            <div className="donutChart">
                                <Doughnut data={middleDonut} width="100" height="85" />
                            </div>
                            <div class="colorSquare red"></div>
                            <p> Rejected. 350 <br />
                                total. 2500 </p>
                        </div>
                        <div className="col-md-4">
                            <h3>Waiting to Review</h3>
                            <hr />
                            <div className="donutChart">
                                <Doughnut data={rightDonut} width="100" height="85" />
                            </div>
                            <div class="colorSquare red"></div>
                            <p> Waiting to Review. 350 <br />
                                total. 2500 </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}


export default MiddleDashboard;
