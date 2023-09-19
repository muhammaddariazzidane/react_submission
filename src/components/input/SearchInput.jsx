import PropTypes from 'prop-types';

export default function SearchInput({ keyword, handleSearch, locale }) {
  return (
    <>
      <input
        value={keyword}
        onChange={handleSearch}
        type="search"
        className="form-control"
        id="search"
        placeholder={locale === 'en' ? 'Search...' : 'Cari...'}
      />
    </>
  );
}

SearchInput.propTypes = {
  keyword: PropTypes.string,
  handleSearch: PropTypes.func,
  locale: PropTypes.string,
};
