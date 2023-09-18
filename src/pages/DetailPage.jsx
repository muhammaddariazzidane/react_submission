import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api';
import Layout from '../layouts/Layout';
import DetailNote from '../components/note/DetailNote';
import LoadingDetail from '../components/loader/LoadingDetail';
import PropTypes from 'prop-types';

export default function DetailPage({ logout }) {
  const [detailNote, setDetailNote] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetailNote = async () => {
      const { error, data } = await getNote(id);
      if (!error) {
        setDetailNote(data);
      }
    };
    fetchDetailNote();
  }, [id]);

  return (
    <Layout logout={logout}>
      <div className="container py-5">
        <div className="row justify-content-center d-flex px-5 py-3 ">
          <div className="col-lg-7">
            {detailNote ? <DetailNote note={detailNote} /> : <LoadingDetail />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

DetailPage.propTypes = {
  logout: PropTypes.func,
};
