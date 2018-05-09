
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotificationList } from './../actions/actions';
import {  DropdownKebab, MenuItem } from 'patternfly-react';


class NotificationPopUp extends Component {
  componentWillMount() {
    this.props.onWillMount();
    this.props.getNotificationList();
  }

  renderNotifications() {
    return this.props.notificationLists.map((notificationList) => {
      const date = new Date(parseInt(notificationList['case-started-at']));
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

     let status;
        if (notificationList['case-status'] === 1 ) {
          status = 'Open';
        } else if (notificationList['case-status'] === 2 ) {
          status = 'Close';
        } else if (notificationList['case-status'] === 3 ) {
          status = 'Cancelled';
        }

      return (
        <div className="NotificationBarTest__wrapper" key={notificationList['case-id']}>
        <div className="row">
        <div className="col-lg-2">
         <i className="fa fa-2x fa-credit-card-alt NotificationBarTest__position" aria-hidden="true"></i>
         </div>
         <div className="col-lg-10">
          <p className="NotificationBarTest__date">{date.toLocaleDateString('en-US', options)}</p>
          <p className="NotificationBarTest__type">{notificationList['case-description']}
          &nbsp;(${notificationList['case-details'].totalFraudAmount})
          </p>
          <p className="NotificationBarTest__status">Status: {status}</p>
          </div>
        </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="NotificationPopUp">
        <DropdownKebab id="notify">
          <MenuItem> <p className="NotificationBarTest_notify"> Customer notifications</p>
          <i className="fa fa-times" aria-hidden="true"></i>
          </MenuItem>
          {this.renderNotifications()}
        </DropdownKebab>
      </div>
    );
  }
}

// NotificationPopUp CONTAINER -- shouldn't be here
const mapStateToProps = state => ({
  notificationLists: state.notificationLists,
});

const mapDispatchToProps = dispatch => ({
  getNotificationList: () => {
    dispatch(getNotificationList());
  },
});
// NotificationPopUp CONTAINER -- shouldn't be here

NotificationPopUp.propTypes = {
  onWillMount: PropTypes.func,
  notificationLists: PropTypes.arrayOf(PropTypes.shape({})),
};

NotificationPopUp.defaultProps = {
  onWillMount: () => {},
  notificationLists: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPopUp);
