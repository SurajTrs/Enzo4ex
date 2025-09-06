import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-gray-900 text-white p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-8 text-gray-300">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium text-white transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
