import { Link } from 'react-router-dom';
import LocaleToggleBtn from './LocaleToggleBtn';
import DarkModeBtn from './DarkModeBtn';
import PropTypes from 'prop-types';

export default function NavigationBtn({
  theme,
  locale,
  toggleLocale,
  toggleTheme,
  logout,
}) {
  return (
    <>
      <li className="nav-item">
        <Link
          to={'/'}
          className={`nav-link ${location.pathname == '/' ? 'active' : null}`}
        >
          {locale === 'en' ? 'Home' : 'Beranda'}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={'/add'}
          className={`nav-link ${
            location.pathname == '/add' ? 'active' : null
          }`}
        >
          {locale === 'en' ? 'Add Note' : 'Buat Catatan'}
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={'/archived'}
          className={`nav-link ${
            location.pathname == '/archived' ? 'active' : null
          }`}
        >
          {locale === 'en' ? 'Archived Note' : 'Catatan Arsip'}
        </Link>
      </li>
      <li className="nav-item me-1">
        <div className="dropdown-center">
          <button
            className="btn border-0 nav-link   dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu dropdown-menu-end border-0  shadow ">
            <li>
              <LocaleToggleBtn
                theme={theme}
                locale={locale}
                toggleLocale={toggleLocale}
              />
            </li>
            <li>
              <DarkModeBtn
                locale={locale}
                theme={theme}
                toggleTheme={toggleTheme}
              />
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <button onClick={logout} type="button" className=" btn btn-danger">
          {locale === 'en' ? 'Logout' : 'Keluar'}
        </button>
      </li>
    </>
  );
}

NavigationBtn.propTypes = {
  locale: PropTypes.string,
  theme: PropTypes.string,
  toggleLocale: PropTypes.func,
  toggleTheme: PropTypes.func,
  logout: PropTypes.func,
};
