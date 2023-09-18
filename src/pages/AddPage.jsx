import { LocaleConsumer } from '../contexts/LocaleContext';
import { useState } from 'react';
import { addNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PropTypes from 'prop-types';

export default function AddPage({ logout }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notif, setNotif] = useState(null);

  const navigate = useNavigate();

  const handleAddNote = async (e) => {
    e.preventDefault();

    const { error, message } = await addNote({ title, body });
    if (message) {
      setTimeout(() => {
        setNotif(null);
      }, 3000);

      setNotif(message);
    }

    if (!error) {
      navigate('/');
    }
  };

  return (
    <Layout logout={logout}>
      <LocaleConsumer>
        {({ locale }) => (
          <div className="container py-5">
            <h1 className="text-center fs-4 mb-3">
              {locale === 'en' ? 'Add Note' : 'Tambah Catatan'}
            </h1>
            {notif && (
              <div className="alert alert-warning col-lg-4 mx-auto text-center">
                {notif}
              </div>
            )}

            <div className="row d-flex justify-content-center px-3">
              <div className="col-lg-6 px-3 pt-4 rounded-3  shadow">
                <form onSubmit={handleAddNote}>
                  <div className="mb-3">
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      type="text"
                      id="title"
                      placeholder={
                        locale === 'en' ? 'Note title....' : 'Judul catatan....'
                      }
                      className="form-control "
                      autoFocus
                      // required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      // required
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      placeholder={
                        locale === 'en'
                          ? 'Contents of the note....'
                          : 'Isi dari catatan.....'
                      }
                      id="body"
                      className="form-control"
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="mb-3 d-flex justify-content-end ">
                    <button type="submit" className="btn btn-primary">
                      {locale === 'en' ? 'Create' : 'Buat'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </LocaleConsumer>
    </Layout>
  );
}

AddPage.propTypes = {
  logout: PropTypes.func,
};
