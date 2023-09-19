import PropTypes from 'prop-types';

export default function AddNoteInput({
  handleTitle,
  handleBody,
  title,
  body,
  locale,
}) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          {locale === 'en' ? 'Title' : 'Judul'}
        </label>

        <input
          onChange={handleTitle}
          value={title}
          type="text"
          id="title"
          placeholder={locale === 'en' ? 'Note title....' : 'Judul catatan....'}
          className="form-control "
          autoFocus
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          {locale === 'en' ? 'Body' : 'Deskripsi'}
        </label>
        <textarea
          required
          value={body}
          onChange={handleBody}
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
    </>
  );
}

AddNoteInput.propTypes = {
  handleTitle: PropTypes.func,
  handleBody: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  locale: PropTypes.string,
};
