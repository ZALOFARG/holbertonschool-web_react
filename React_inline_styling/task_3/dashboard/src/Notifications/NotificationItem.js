import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const mediumScreenSize = {
  padding: '10px 8px',
  listStyle: 'none',
  borderBottom: '1px solid black',
  fontSize: '20px'
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    '@media (max-width: 900px)': mediumScreenSize,
  },
  urgent: {
    color: 'red',
    '@media (max-width: 900px)': mediumScreenSize,
  },
});

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  const color = (type === 'urgent') ? css(styles.urgent) : css(styles.default);
  return (
    <li
      className={color}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {}
};

export default NotificationItem;