import React, { useContext } from "react";
import { PokemonContext } from "../../shared/provider/pokemons/pokemons";
import { AuthenticationContext } from "../../shared/provider/auth";
import { PokemonHistoryCard } from "../../components/pokemon-history-card/PokemonHistoryCard";

export const HistoryView = () => {
  const [pokemons] = useContext(PokemonContext);
  const [user] = useContext(AuthenticationContext);

  return (
    <div className="flex flex-wrap items-center space-around justify-center min-h-screen content-evenly">
      {pokemons.map((pokemon) => {
        if (pokemon.owner.name === user.name) {
          return <PokemonHistoryCard key={pokemon.id} pokemon={pokemon} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};
