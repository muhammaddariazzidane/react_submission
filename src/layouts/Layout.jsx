import { useState, useEffect } from 'react';
import { LocaleProvider } from '../contexts/LocaleContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';

export default function Layout({ children, logout }) {
  const initTheme = localStorage.getItem('theme');
  const initLocale = localStorage.getItem('locale');

  const [theme, setTheme] = useState(initTheme || 'light');
  const [locale, setLocale] = useState(initLocale, 'en');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'id' : 'en';
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleProvider value={{ locale, toggleLocale }}>
        <Navbar logout={logout} />
        <main>{children}</main>
      </LocaleProvider>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
  logout: PropTypes.func,
};
