import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.component {
  render() {
    const { html, type, value, id, markAsRead } = this.props;
    return (
      <li 
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }  
}

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