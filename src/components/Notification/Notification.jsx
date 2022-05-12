import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <span className="notific_message">{message}</span>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
