import PropTypes from 'prop-types';

export default function ArsipButton({ children, handleArchiveNote }) {
  return (
    <button
      onClick={handleArchiveNote}
      className="btn btn-warning"
      type="button"
    >
      {children}
    </button>
  );
}

ArsipButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
};
