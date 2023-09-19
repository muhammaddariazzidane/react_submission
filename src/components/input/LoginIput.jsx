import PropTypes from 'prop-types';

export default function LoginIput({
  handleEmail,
  handlePassword,
  email,
  password,
}) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          onChange={handleEmail}
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
          onChange={handlePassword}
          value={password}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
    </>
  );
}

LoginIput.propTypes = {
  handleEmail: PropTypes.func,
  handlePassword: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};
