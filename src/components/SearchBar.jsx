import { LocaleConsumer } from '../contexts/LocaleContext';
import PropTypes from 'prop-types';
import SearchInput from './input/SearchInput';

export default function SearchBar({ keyword, handleSearch }) {
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="mb-5">
              <h1 className="fs-5 text-center mb-3">
                {locale === 'en' ? 'Search Notes' : 'Cari Catatan'}
              </h1>

              <SearchInput
                keyword={keyword}
                handleSearch={handleSearch}
                locale={locale}
              />
            </div>
          </div>
        </div>
      )}
    </LocaleConsumer>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  handleSearch: PropTypes.func,
};
