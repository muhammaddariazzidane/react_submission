import { getActiveNotes } from '../utils/api';
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { LocaleConsumer } from '../contexts/LocaleContext';
import Layout from '../layouts/Layout';
import PropTypes from 'prop-types';
import Notes from '../components/note/Notes';
import SearchBar from '../components/SearchBar';

export default function HomePage({ logout }) {
  const [activeNotes, setActiveNotes] = useState([]);
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setActiveNotes(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    keyword
      ? searchParams.set('keyword', keyword)
      : searchParams.delete('keyword');

    navigate(`?${searchParams.toString()}`);
  }, [keyword, searchParams, navigate]);

  const filteredActiveNotes = activeNotes.filter(
    (filterNote) =>
      filterNote.title.toLowerCase().includes(keyword.toLowerCase()) ||
      filterNote.body.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <Layout logout={logout}>
      <LocaleConsumer>
        {({ locale }) => (
          <div className="container py-4 px-4">
            <SearchBar
              keyword={keyword}
              handleSearch={(e) => setKeyword(e.target.value)}
            />

            <div className="row d-flex   flex-wrap ">
              {filteredActiveNotes.length > 0 ? (
                filteredActiveNotes.map((note, i) => (
                  <Notes key={i} note={note} />
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>
                    {locale === 'en'
                      ? 'No matching notes found'
                      : 'Tidak ditemukan catatan yang cocok'}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </LocaleConsumer>
    </Layout>
  );
}

HomePage.propTypes = {
  logout: PropTypes.func,
};
