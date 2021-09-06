import { Link } from "react-router-dom";

export const NotFoundView = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex flex-col">
      <p>This page doesn't exist. </p>
      <p>Nothing to do here.</p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go back home
      </Link>
    </div>
  );
};
