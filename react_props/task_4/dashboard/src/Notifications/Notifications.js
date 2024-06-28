import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer }) {
  const handleClick = () => console.log("Close button has been clicked");

  const buttonStyle = {
    float: 'right',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  }

  const latestNotification = getLatestNotification();

  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications'>
          <button aria-label='Close' style={buttonStyle} onClick={handleClick}>
            <img src={closeIcon} alt="close icon" width="16px" />
          </button>
          Here is the list of notifications
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: latestNotification }} />
          </ul>
        </div>
      )}
    </>
  )
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications;