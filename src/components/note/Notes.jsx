import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ActiveNotes({ note }) {
  const dateFormat = (dateString) => {
    const settings = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const localDate = new Date(dateString);
    return localDate.toLocaleDateString('id-ID', settings);
  };

  return (
    <div className="col-lg-3 mb-3">
      <div className="card border-0 shadow">
        <div className="card-body">
          <Link to={`/detail/${note.id}`} className="text-decoration-none ">
            <h5 className="card-title">{note.title}</h5>
            <small className="card-subtitle mb-2 text-body-secondary">
              {dateFormat(note.createdAt)}
            </small>
          </Link>
          <p className="card-text">{note.body}</p>
        </div>
      </div>
    </div>
  );
}

ActiveNotes.propTypes = {
  note: PropTypes.object.isRequired,
};
