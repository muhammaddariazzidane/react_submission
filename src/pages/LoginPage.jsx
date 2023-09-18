/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../utils/api';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function LoginPage({ loginSuccess }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate('/');
    }
  };

  return (
    <div className="container py-5">
      <div className="row px-3">
        <h1 className="text-center py-3 fs-2">Login</h1>
        <form
          onSubmit={handleLogin}
          className="col-lg-5 mx-auto p-4 shadow rounded-3"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
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
