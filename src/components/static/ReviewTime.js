var React = require('react');

var FontAwesome = require('react-fontawesome');

const ReviewTime= (props) => {

    return (
      <div class="ibox float-e-margins text-center">
        <div class="ibox-title">
          <h2><b>AVERAGE REVIEW TIME</b> </h2>
        </div>
        <div class="ibox-content">           
           <h2>3.5 min</h2>
           <i class="fas fa-stopwatch"></i>
          <FontAwesome
            className='icon'
            name='bell'
            size='sm'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </div>

    );
}


module.exports = ReviewTime;
