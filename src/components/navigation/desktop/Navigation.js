import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../../shared/provider/auth";

export const Navigation = () => {
  const [user, setUser] = useContext(AuthenticationContext);

  const handleLaogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="py-4 flex flex-row justify-around items-center">
      <div className="">
        <Link
          to="/"
          className="mx-2 bg-yellow-300 hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 rounded"
        >
          Home
        </Link>
        <Link
          to="/history"
          className="mx-2 bg-yellow-300 hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 rounded"
        >
          History
        </Link>
      </div>
      <div>
        {user ? (
          <Link
            to="/"
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLaogOut}
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/signin"
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};
