
import React, { Component } from 'react';
import './../../css/cssoverride.css'

 const PersonRanking = (props) =>{

    return (
      <div class="ibox float-e-margins">
          <div className="ranking_card">
            <div class="ranking_container_first">
              <h1><strong> 1 </strong></h1> <img class="img-circle rankingImage rankingImage-martin" height="42" width="42" /><h2> Martin S. </h2>
              <strong> 2.3m</strong>
            </div>

            <div class="ranking_container">
              <h1><strong> 2 </strong></h1> <img class="img-circle rankingImage rankingImage-bob" height="42" width="42" /> <h2> Bob J. </h2>
              <strong> 2.45m </strong>
            </div>

            <div class="ranking_container">
              <h1><strong> 3 </strong></h1> <img class="img-circle rankingImage rankingImage-mike" height="42" width="42" /> <h2> Mike G. </h2>
              <strong> 2.7m </strong>
            </div>

            <div class="ranking_container_gray">
              <h1><strong> 4 </strong></h1> <img class="img-circle rankingImage rankingImage-seth" height="42" width="42" /> <h2> Seth H. </h2>
              <strong> 2.85m </strong>
            </div>

            <div class="ranking_container_gray">
              <h1><strong> 5 </strong></h1> <img class="img-circle rankingImage rankingImage-tim" height="42" width="42" /><h2> Tim W. </h2>
              <strong> 3.0m </strong>
            </div>


          </div>

        <div>


        </div>
      </div>




    );
}
export default PersonRanking;
