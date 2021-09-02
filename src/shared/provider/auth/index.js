import React, { useState, useEffect } from "react";

export const AuthenticationContext = React.createContext(null);

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const usr = localStorage.getItem("user");
    if (usr) {
      const loggedInUser = JSON.parse(usr);
      setUser(loggedInUser);
    }
  }, []);

  return (
    <AuthenticationContext.Provider value={[user, setUser]}>
      {children}
    </AuthenticationContext.Provider>
  );
};
