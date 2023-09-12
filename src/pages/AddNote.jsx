import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

export default function AddNote({ createNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();

  const handleAddNote = (e) => {
    e.preventDefault();
    const data = {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    createNote(data);
    navigate('/');
  };

  return (
    <div className="container">
      <Navbar />
      <div className="row py-5">
        <div className="col-lg-6 shadow p-4 rounded-3 mx-auto">
          <h1 className="fs-4 text-center mb-3  ">Buat catatan</h1>
          <form onSubmit={handleAddNote} className="modal-body">
            <div className="mb-3">
              <label htmlFor="titile" className="form-label">
                Title
              </label>
              <input
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
                id="titile"
                placeholder="Belajar ngoding..."
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Body
              </label>
              <textarea
                onChange={(e) => setBody(e.target.value)}
                placeholder="Hari ini react js..."
                className="form-control"
                id="body"
                rows="3"
              ></textarea>
            </div>
            <div className="d-flex gap-2 justify-content-end">
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

AddNote.propTypes = {
  createNote: PropTypes.func.isRequired,
};
