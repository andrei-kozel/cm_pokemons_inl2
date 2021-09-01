import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="py-4 flex flex-row justify-around items-center">
      <div className="">
        <Link
          to="/"
          class="mx-2 bg-yellow-300 hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 rounded"
        >
          Home
        </Link>
        <Link
          to="/history"
          class="mx-2 bg-yellow-300 hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 rounded"
        >
          History
        </Link>
      </div>
      <div>
        <Link
          to="/signin"
          class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
        {/* <button class="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log Out
        </button> */}
      </div>
    </div>
  );
};
