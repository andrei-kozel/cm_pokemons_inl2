import React, { createContext, useState, useContext } from "react";
import { AuthenticationContext } from "../auth";

export const PokemonContext = React.createContext(null);

export const PokemonContextProvider = ({ children }) => {
  const [user, setUser] = useContext(AuthenticationContext);
  const [pokemons, setPokemons] = useState();

  return (
    <PokemonContext.Provider value={[pokemons, setPokemons]}>
      {children}
    </PokemonContext.Provider>
  );
};
