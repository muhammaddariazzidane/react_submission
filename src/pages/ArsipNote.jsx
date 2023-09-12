import Navbar from '../components/Navbar';
import Notes from '../components/Notes';
import PropTypes from 'prop-types';

export default function ArsipNote({ notes, handleArchiveNote }) {
  const noteArchive = notes.filter((notes) => notes.archived);

  return (
    <div className="container">
      <Navbar />
      <div className="row py-5 d-flex gap-2 justify-content-center">
        {noteArchive.length > 0 ? (
          <Notes notes={noteArchive} handleArchiveNote={handleArchiveNote} />
        ) : (
          <p className="text-center fw-semibold fs-5">
            Belum ada notes yang di arsipkan
          </p>
        )}
      </div>
    </div>
  );
}

ArsipNote.propTypes = {
  notes: PropTypes.array.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
};
