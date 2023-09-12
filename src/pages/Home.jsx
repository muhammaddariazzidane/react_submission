import Notes from '../components/Notes';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Search from '../components/Search';
import PropTypes from 'prop-types';

export default function Home({ notes, handleArchiveNote }) {
  const [query, setQuery] = useState('');

  const noteActive = notes.filter((notes) => !notes.archived);

  const filteredNotes = noteActive.filter((note) =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />
      <Search handleSearch={(e) => setQuery(e.target.value)} query={query} />
      {noteActive.length > 0 ? (
        <Notes notes={filteredNotes} handleArchiveNote={handleArchiveNote} />
      ) : (
        <p className="text-center fw-semibold fs-4">Belum ada catatan</p>
      )}
    </div>
  );
}

Home.propTypes = {
  notes: PropTypes.array.isRequired,
  handleArchiveNote: PropTypes.func.isRequired,
};
