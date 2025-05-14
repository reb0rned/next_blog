import Link from "next/link";

export default () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 bg-gray-200 rounded-xl">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Oops! Page not found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for might have been moved or does not exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};
