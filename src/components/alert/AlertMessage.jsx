import PropTypes from 'prop-types';

export default function AlertMessage({ message, type }) {
  return (
    <div
      className={`alert ${
        type === undefined ? 'alert-warning ' : type
      } col-lg-4 mx-auto text-center`}
    >
      {message}
    </div>
  );
}
AlertMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};
