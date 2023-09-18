import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function DarkModeBtn({ toggleTheme, theme, locale }) {
  return (
    <button onClick={toggleTheme} className="dropdown-item border-0">
      {theme === 'light' ? (
        <div className="d-flex gap-2 align-items-center">
          <FaMoon size={22} />
          <span className="ms-1">
            {locale === 'en' ? 'Dark Mode' : 'Mode Gelap'}
          </span>
        </div>
      ) : (
        <div className="d-flex gap-2 align-items-center ">
          <FaSun size={22} />
          <span className="ms-1">
            {locale === 'en' ? 'Light Mode' : 'Mode Terang'}
          </span>
        </div>
      )}
    </button>
  );
}

DarkModeBtn.propTypes = {
  toggleTheme: PropTypes.func,
  theme: PropTypes.string,
  locale: PropTypes.string,
};
