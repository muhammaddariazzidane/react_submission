import { getUserLogged, putAccessToken } from '../utils/api';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import DetailPage from '../pages/DetailPage';
import ArchivedPage from '../pages/ArchivedPage';
import NotFound from '../pages/errors/NotFound';

export default function NotesApp() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      } catch (error) {
        setAuthedUser(null);
      } finally {
        setInitializing(false);
      }
    }
    fetchUser();
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch (error) {
      setAuthedUser(null);
    }
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
  };

  if (initializing) {
    return null;
  }

  return (
    <Routes>
      {authedUser === null ? (
        <>
          <Route
            path={'/*'}
            element={<LoginPage loginSuccess={onLoginSuccess} />}
          />
          <Route path={'/register'} element={<RegisterPage />} />
        </>
      ) : (
        <>
          <Route path={'/'} element={<HomePage logout={onLogout} />} />
          <Route path={'/add'} element={<AddPage logout={onLogout} />} />
          <Route
            path={'/archived'}
            element={<ArchivedPage logout={onLogout} />}
          />
          <Route
            path={'/detail/:id'}
            element={<DetailPage logout={onLogout} />}
          />
          <Route path={'/*'} element={<NotFound />} />
        </>
      )}
    </Routes>
  );
}
