import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PokemonContext } from "../../shared/provider/pokemons/pokemons";
import { AuthenticationContext } from "../../shared/provider/auth";
import { PokemonHistoryCard } from "../../components/pokemon-history-card/PokemonHistoryCard";

export const HistoryView = () => {
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [user] = useContext(AuthenticationContext);
  let history = useHistory();

  const handleClick = (pokemon) => {
    console.log("pushing");
    history.push("/pokemon", pokemon);
  };

  const clearHistory = () => {
    setPokemons([]);
  };

  if (pokemons.length === 0) {
    return (
      <div className="flex flex-wrap items-center space-around justify-center min-h-screen content-evenly">
        Empty :(
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center space-around justify-center mt-8 content-evenly">
        <button
          to="/"
          className="mx-2 bg-yellow-300 hover:bg-yellow-400 text-gray-600 font-bold py-2 px-4 rounded"
          onClick={clearHistory}
        >
          Clear History
        </button>
      </div>

      <div className="flex flex-wrap items-center space-around justify-center  content-evenly mt-10">
        {pokemons.map((pokemon) => {
          if (pokemon.owner.name === user.name) {
            return (
              <PokemonHistoryCard
                key={pokemon.id}
                pokemon={pokemon}
                onClick={() => handleClick(pokemon)}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
