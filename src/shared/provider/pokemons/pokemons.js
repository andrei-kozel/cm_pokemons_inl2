import React, { createContext, useState, useEffect } from "react";

export const PokemonContext = createContext(null);

export const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const localPokemons = localStorage.getItem("pokemons");
    if (localPokemons) {
      setPokemons(JSON.parse(localPokemons));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  return (
    <PokemonContext.Provider value={[pokemons, setPokemons]}>
      {children}
    </PokemonContext.Provider>
  );
};
