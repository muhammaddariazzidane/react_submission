import PropTypes from 'prop-types';

export default function DeleteModal({ handleDelete, locale }) {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex={-1}
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h1 className="fs-3 text-center ">
              {locale === 'en'
                ? 'Are you sure you want to delete this note?'
                : 'Yakin mau hapus catatan?'}
            </h1>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {locale === 'en' ? 'Cancel' : 'Batal'}
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              onClick={handleDelete}
              className="btn btn-danger"
            >
              {locale === 'en' ? 'Delete' : 'Hapus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteModal.propTypes = {
  handleDelete: PropTypes.func,
  locale: PropTypes.string,
};
