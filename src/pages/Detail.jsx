import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ArsipButton from '../components/button/ArsipButton';
import PropTypes from 'prop-types';

export default function Detail({ notes, deleteNote, handleArchiveNote }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteNote(id);
    navigate('/');
  };

  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  const handleArchive = (id) => {
    handleArchiveNote(id);
    navigate('/');
  };

  return (
    <div className="container">
      <Navbar />
      <div className="row py-5">
        <div className="col-lg-6 mx-auto p-4 shadow rounded-3">
          <h5>{note.title}</h5>
          <p>{note.body}</p>
          <div className="d-flex gap-1 justify-content-end">
            <button
              onClick={() => handleDelete(note.id)}
              type="button"
              className="btn btn-danger"
            >
              Hapus
            </button>
            <ArsipButton handleArchiveNote={() => handleArchive(note.id)}>
              {note.archived ? 'Batal Arsip' : 'Arsipkan'}
            </ArsipButton>
          </div>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {
  notes: PropTypes.array.isRequired,
  deleteNote: PropTypes.func.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
};
