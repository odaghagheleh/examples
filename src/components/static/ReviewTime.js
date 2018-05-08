var React = require('react');


const ReviewTime= (props) => {

    return (
      <div class="ibox float-e-margins text-center">
        <div class="ibox-title">
        <h2><b>AVERAGE REVIEW TIME</b> </h2>
        </div>
            <div class="ibox-content">
            <h2><i className="material-icons" style={{fontSize:'25px', paddingTop:10}}>timer</i> 3.5 min</h2>
        </div>

      </div>

    );
}


module.exports = ReviewTime;
