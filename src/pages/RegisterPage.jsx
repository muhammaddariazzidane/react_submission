import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../utils/api';
import AlertMessage from '../components/alert/AlertMessage';
import RegisterInput from '../components/input/RegisterInput';

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notif, setNotif] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    const { error, message } = await register(newUser);

    if (message) {
      setTimeout(() => {
        setNotif(null);
      }, 3000);

      const alertType =
        message === 'Registrasi berhasil!, silahkan login'
          ? 'alert-success'
          : 'alert-warning';

      setNotif({ message, type: alertType });
    }

    if (!error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container py-5">
      <div className="row px-3">
        <h1 className="text-center py-3 fs-2">Register</h1>
        {notif && <AlertMessage message={notif.message} type={notif.type} />}
        <form
          onSubmit={handleRegister}
          className="col-lg-5 mx-auto p-4 shadow rounded-3"
        >
          <RegisterInput
            handleName={(e) => setName(e.target.value)}
            name={name}
            handleEmail={(e) => setEmail(e.target.value)}
            email={email}
            handlePassword={(e) => setPassword(e.target.value)}
            password={password}
          />

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
