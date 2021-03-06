import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../shared/provider/auth";

export const SignInView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useContext(AuthenticationContext);
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    if (username.length && password.length) {
      const usr = { name: username, password: password };
      setUser(usr);
      localStorage.setItem("user", JSON.stringify(usr));
      history.push("/");
    } else {
      setError("Please, fill the form!");
    }
  };

  if (user) {
    return (
      <p className="flex items-center justify-center min-h-screen">
        Hello, {user.name}. You are logged in!
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username*
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={({ target }) => {
              setError("");
              setUsername(target.value);
            }}
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password*
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={({ target }) => {
              setError("");
              setPassword(target.value);
            }}
          />
        </div>
        <p className="text-sm mb-4 text-red-400">{error}</p>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
