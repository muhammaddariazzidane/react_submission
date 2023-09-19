/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/api';
import { useState } from 'react';
import PropTypes from 'prop-types';
import AlertMessage from '../components/alert/AlertMessage';
import LoginIput from '../components/input/LoginIput';

export default function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notif, setNotif] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error, data, message } = await login({ email, password });
    if (message) {
      setTimeout(() => {
        setNotif(null);
      }, 3000);
      setNotif({ message });
    }
    if (!error) {
      loginSuccess(data);
      navigate('/');
    }
  };

  return (
    <div className="container py-5">
      <div className="row px-3">
        <h1 className="text-center py-3 fs-2">Login</h1>
        {notif && <AlertMessage message={notif.message} type={notif.type} />}

        <form
          onSubmit={handleLogin}
          className="col-lg-5 mx-auto p-4 shadow rounded-3"
        >
          <LoginIput
            handleEmail={(e) => setEmail(e.target.value)}
            email={email}
            handlePassword={(e) => setPassword(e.target.value)}
            password={password}
          />

          <div className="my-3 d-flex justify-content-between align-items-center ">
            <div className="fst-italic ">
              Don't have an account?
              <Link to={'/register'}>Register here</Link>
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};
