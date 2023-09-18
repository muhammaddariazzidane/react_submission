import { SiGoogletranslate } from 'react-icons/si';
import PropTypes from 'prop-types';

export default function LocaleToggleBtn({ toggleLocale, locale, theme }) {
  return (
    <button type="button" onClick={toggleLocale} className="dropdown-item fs-6">
      <SiGoogletranslate
        size={30}
        color={theme === 'light' ? 'blue' : 'white'}
        className="me-1 p-1 rounded-1 "
      />
      <span>{locale === 'en' ? 'english' : 'indonesia'}</span>
    </button>
  );
}

LocaleToggleBtn.propTypes = {
  toggleLocale: PropTypes.func,
  locale: PropTypes.string,
  theme: PropTypes.string,
};
