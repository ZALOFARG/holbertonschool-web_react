import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
  const handleClick = () => console.log("Close button has been clicked");

  const buttonStyle = {
    float: 'right',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  }

  const latestNotification = getLatestNotification();

  return (
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
  )
}

export default Notifications;