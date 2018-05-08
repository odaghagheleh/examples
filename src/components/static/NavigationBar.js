
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


const NavigationBar = (props) => {
    return (

        <div class="row navigationBar">
            <div class="col-md-5">
                <span class="topNav">
                    <h1> &nbsp;&nbsp;&nbsp;&nbsp;FORTRESS BANK & LOAN</h1>
                </span>
            </div>

            <div class="col-md-4">
                <div class="tab">
                    <button class="tablinks">Dashboard</button>
                    <button class="tablinks">Customers</button>
                    <button class="tablinks">Leaderboard</button>
                </div>
            </div>
            <div class="col-md-2">
                <span class="topNav">
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