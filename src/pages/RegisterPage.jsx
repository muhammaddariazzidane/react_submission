import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    const { error } = await register(newUser);

    if (!error) {
      navigate('/');
    }
  };

  return (
    <div className="container py-5">
      <div className="row px-3">
        <h1 className="text-center py-3 fs-2">Register</h1>
        <form
          onSubmit={handleRegister}
          className="col-lg-5 mx-auto p-4 shadow rounded-3"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
            />
          </div>
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
              Already have an account?
              <Link to={'/'}>Login here</Link>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
