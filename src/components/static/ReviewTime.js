var React = require('react');


const ReviewTime= (props) => {

    return (
      <div class="ibox float-e-margins text-center">
        <div class="ibox-title">
          <h2><b>AVERAGE REVIEW TIME</b> </h2>
        </div>
        <div class="ibox-content">       
           <h2>3.5 min<i className="material-icons" style={{fontSize:'25px', paddingTop:10}}>timer</i></h2>
        </div>
      </div>

    );
}


module.exports = ReviewTime;
