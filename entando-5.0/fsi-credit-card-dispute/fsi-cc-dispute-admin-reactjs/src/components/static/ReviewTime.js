const React = require('react');

const ReviewTime = props => (
  <div className="ibox float-e-margins ReviewTime__container">
    <div className="ibox-title">
      <h3>
        <b>AVERAGE REVIEW TIME</b>
      </h3>
    </div>
    <div className="ibox-content ReviewTime__child-container">
      <div className="row ">
        <div className="col-xs-3">
          <i className="material-icons ReviewTime__icon">timer</i>
        </div>
        <div className="col-xs-8">
          <p className="ReviewTime__time">3.5 min</p>
        </div>
      </div>
    </div>
  </div>
);

module.exports = ReviewTime;
