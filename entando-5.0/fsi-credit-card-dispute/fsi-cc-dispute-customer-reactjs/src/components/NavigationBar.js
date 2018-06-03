
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './../css/yilicss.css'


const NavigationBar = (props) => {
    return (

        <div className="row navigationBar">
            <div className="col-md-5">
                <span className="topNav">
                    <h1> &nbsp;&nbsp;&nbsp;&nbsp;FORTRESS BANK & LOAN</h1>
                </span>
            </div>

            <div className="col-md-5">
                <div className="tab">
                    <button className="tablinks">Dashboard</button>
                    <button className="tablinks">Customers</button>
                    <button className="tablinks">Leaderboard</button>
                </div>
            </div>
            <div className="col-md-2">
                <span className="topNav">
                    <br />
                    <FontAwesome
                        className='icon'
                        name='search'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <FontAwesome
                        className='icon'
                        name='envelope'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <FontAwesome
                        className='icon'
                        name='bell'
                        size='1x'
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                </span>
            </div>
        </div>
    );
}
export default NavigationBar;