import React from 'react';
import { StyleSheet, css } from 'aphrodite';
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

const styles = StyleSheet.create({
  NotificationsContainer: {
    position: 'fixed',
    right: '10px',
  },
  menuItem: {
    textAlign: 'end',
    height: '30px',
  },
  notifications: {
    border: '1px dashed #e0354b',
    borderWidth: '2px',
    padding: '0.5rem',
    width: '50vmin',
  },
});

class Notifications extends React.Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  handleClick = () => console.log("Close button has been clicked");


  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
  
    const buttonStyle = {
      float: 'right',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
    }

    return (
      <div className={css(styles.NotificationsContainer)}>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button aria-label='Close' style={buttonStyle} onClick={this.handleClick}>
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
                <NotificationItem key={notification.id} markAsRead={this.markAsRead} {...notification} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications;