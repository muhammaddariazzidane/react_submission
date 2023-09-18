import { useEffect, useState } from 'react';
import { LocaleConsumer } from '../contexts/LocaleContext';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import LocaleToggleBtn from './button/LocaleToggleBtn';
import DarkModeBtn from './button/DarkModeBtn';
import PropTypes from 'prop-types';

export default function Navbar({ logout }) {
  const [navPosition, setNavPosition] = useState('');

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 1280
        ? setNavPosition('align-items-center ')
        : setNavPosition('align-items-start');
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <LocaleConsumer>
          {({ locale, toggleLocale }) => (
            <nav className="navbar navbar-expand-lg py-3 shadow">
              <div className="container">
                <Link to={'/'} className="navbar-brand fw-semibold ">
                  {locale === 'en' ? 'My Notes' : 'Catatan Ku'}
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className={`navbar-nav ms-auto gap-1 ${navPosition}`}>
                    <li className="nav-item">
                      <Link
                        to={'/'}
                        className={`nav-link ${
                          location.pathname == '/' ? 'active' : null
                        }`}
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
                      <button
                        onClick={logout}
                        type="button"
                        className=" btn btn-danger"
                      >
                        {locale === 'en' ? 'Logout' : 'Keluar'}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          )}
        </LocaleConsumer>
      )}
    </ThemeConsumer>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func,
};
