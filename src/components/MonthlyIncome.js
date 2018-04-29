import React, { Component } from 'react';



const MonthlyIncome = (props) => {

    var today = new Date();
    today = JSON.stringify(today);
    return (

        <div class="widget lazur-bg no-padding">
            <div class="p-m">
                <h1 class="m-xs">$ 210,660</h1>

                <h3 class="font-bold no-margins">
                    Monthly income
                        </h3>
                <small>Income form project Beta.</small>
            </div>
            <div class="flot-chart">
                <div class="flot-chart-content" id="flot-chart2"></div>
            </div>
        </div>
    );
}


export default MonthlyIncome;
