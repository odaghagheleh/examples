
import React, { Component } from 'react';
import './../../css/cssoverride.css'

 const PersonRanking = (props) =>{

    return (
      <div class="ibox float-e-margins">
          <div className="ranking_card">
            <div class="ranking_container">
              <h1><strong> 1 </strong></h1> <img class="img-circle rankingImage" height="42" width="42" /><h2> Martin S. </h2>
              <strong> 2.5mins </strong>
            </div>

            <div class="ranking_container">
              <h1><strong> 2 </strong></h1> <img class="img-circle rankingImage" height="42" width="42" /> <h2> Bob J. </h2>
              <strong> 2.5mins </strong>
            </div>

            <div class="ranking_container">
              <h1><strong> 3 </strong></h1> <img class="img-circle rankingImage" height="42" width="42" /> <h2> Bob J. </h2>
              <strong> 2.5mins </strong>
            </div>

            <div class="ranking_container_grey">
              <h1><strong> 4 </strong></h1> <img class="img-circle rankingImage" height="42" width="42" /> <h2> Bob J. </h2>
              <strong> 2.5mins </strong>
            </div>

            <div class="ranking_container_grey">
              <h1><strong> 5 </strong></h1> <img class="img-circle rankingImage" height="42" width="42" /><h2> Bob J. </h2>
              <strong> 2.5mins </strong>
            </div>

            <br />
            <h4 className="text-center">-------- Show me more -------- </h4>

          </div>
      </div>


    );
}
export default PersonRanking;
