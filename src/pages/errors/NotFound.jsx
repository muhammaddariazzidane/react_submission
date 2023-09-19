import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container text-center  py-5">
      <h1 className="pt-5 text-center mt-5">404 Page Not Found</h1>
      <Link to={'/'} className="d-block mt-4">
        Back to Home
      </Link>
    </div>
  );
}
