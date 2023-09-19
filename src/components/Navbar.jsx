import { useEffect, useState } from 'react';
import { LocaleConsumer } from '../contexts/LocaleContext';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationBtn from './button/NavigationBtn';

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
                    <NavigationBtn
                      locale={locale}
                      toggleLocale={toggleLocale}
                      theme={theme}
                      toggleTheme={toggleTheme}
                      logout={logout}
                    />
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
