import { LocaleConsumer } from '../contexts/LocaleContext';
import { useState } from 'react';
import { addNote } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import PropTypes from 'prop-types';
import AlertMessage from '../components/alert/AlertMessage';
import AddNoteInput from '../components/input/AddNoteInput';

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

      const alertType =
        message === 'Berhasil menambah catatan'
          ? 'alert-success'
          : 'alert-warning';

      setNotif({ message, type: alertType });
    }

    if (!error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
      setTitle('');
      setBody('');
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
              <AlertMessage message={notif.message} type={notif.type} />
            )}

            <div className="row d-flex justify-content-center px-3">
              <div className="col-lg-6 px-3 pt-4 rounded-3  shadow">
                <form onSubmit={handleAddNote}>
                  <AddNoteInput
                    handleTitle={(e) => setTitle(e.target.value)}
                    handleBody={(e) => setBody(e.target.value)}
                    title={title}
                    body={body}
                    locale={locale}
                  />
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
