import { Route, Routes } from 'react-router-dom';
import { getUserLogged, putAccessToken } from '../utils/api';
import React from 'react';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import DetailPage from '../pages/DetailPage';
import ArchivedPage from '../pages/ArchivedPage';
import NotFound from '../pages/errors/NotFound';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authedUser: null,
      initializing: true,
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });

    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <Routes>
          <Route
            path={'/*'}
            element={<LoginPage loginSuccess={this.onLoginSuccess} />}
          />
          <Route path={'/register'} element={<RegisterPage />} />
        </Routes>
      );
    }

    return (
      <Routes>
        <Route path={'/'} element={<HomePage logout={this.onLogout} />} />
        <Route path={'/add'} element={<AddPage logout={this.onLogout} />} />
        <Route
          path={'/archived'}
          element={<ArchivedPage logout={this.onLogout} />}
        />
        <Route
          path={'/detail/:id'}
          element={<DetailPage logout={this.onLogout} />}
        />
        <Route path={'/*'} element={<NotFound />} />
      </Routes>
    );
  }
}

export default NotesApp;
