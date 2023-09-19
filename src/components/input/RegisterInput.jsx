import PropTypes from 'prop-types';

export default function RegisterInput({
  handleName,
  handlePassword,
  handleEmail,
  name,
  email,
  password,
}) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={handleName}
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

RegisterInput.propTypes = {
  handleName: PropTypes.func,
  handleEmail: PropTypes.func,
  handlePassword: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
};
