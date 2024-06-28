import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

function Notifications({ displayDrawer, listNotifications = [] }) {
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
            {listNotifications.length === 0 && (
              <tr>
                <td colSpan={2}>No new notification for now</td>
              </tr>
            )}
            {listNotifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications;