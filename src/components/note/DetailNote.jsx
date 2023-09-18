import { deleteNote, archiveNote, unarchiveNote } from '../../utils/api';
import { BiArchiveIn, BiTrash } from 'react-icons/bi';
import { LocaleConsumer } from '../../contexts/LocaleContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteModal from '../modal/DeleteModal';

export default function DetailNote({ note }) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    const { error } = await deleteNote(id);

    if (!error) {
      navigate('/');
    }
  };

  const handleArchieve = async (id) => {
    const { error } = await archiveNote(id);

    if (!error) {
      navigate('/');
    }
  };

  const handleUnArchieve = async (id) => {
    const { error } = await unarchiveNote(id);

    if (!error) {
      navigate('/');
    }
  };

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
          <div className="d-flex justify-content-end gap-2 pt-5">
            <button
              type="button"
              onClick={
                note.archived
                  ? () => handleUnArchieve(note.id)
                  : () => handleArchieve(note.id)
              }
              className="btn btn-warning"
            >
              <BiArchiveIn size={25} />
            </button>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              className="btn btn-danger"
            >
              <BiTrash size={25} />
            </button>

            <DeleteModal
              locale={locale}
              handleDelete={() => handleDelete(note.id)}
            />
          </div>
        </>
      )}
    </LocaleConsumer>
  );
}

DetailNote.propTypes = {
  note: PropTypes.object.isRequired,
};
