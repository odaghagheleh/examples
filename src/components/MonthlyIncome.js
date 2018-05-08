/* eslint no-unused-vars: 0, eqeqeq:0 */
import React, { Component } from 'react';



const MonthlyIncome = (props) => {

    var today = new Date();
    today = JSON.stringify(today);
    return (

        <div className="widget-monthly lazur-bg no-padding monthyIncome">
            <div className="p-m">
                <h1 className="m-xs">$ 210,660</h1>

                <h3 className="font-bold no-margins">
                    Monthly income
                        </h3>
                <small>Income form project Beta.</small>
            </div>
            <div className="flot-chart">
                <div className="flot-chart-content" id="flot-chart2"></div>
            </div>
        </div>
    );
}


export default MonthlyIncome;
