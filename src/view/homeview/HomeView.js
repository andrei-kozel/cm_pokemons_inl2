import React, { useState, useEffect } from "react";
import { Spinner } from "../../components/spinner/Spinner";

export const HomeView = () => {
  const [error, setError] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    setIsLoading(true);
    setError("");
    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((res) => res.json())
      .then(
        (result) => {
          setAllPokemons(result.results);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setError("Can't catch any pokemon.");
        }
      );
  };

  const getOnePokemon = (url) => {
    setIsLoading(true);
    setPokemon(null);
    setError("");
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setPokemon(result);
        },
        (error) => {
          console.log(error);
          setError("Can't catch any pokemon.");
        }
      );
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (allPokemons.length - 1));
  };

  const handleCatchPokemon = () => {
    setError("");
    if (allPokemons.length === 0) {
      getPokemons();
    }
    const randomPokemonId = getRandomNumber();
    const tmpPokemon = allPokemons[randomPokemonId];
    getOnePokemon(tmpPokemon.url);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {error ? <p className="text-sm mb-4 text-red-400">{error}</p> : null}

      {isLoading ? <Spinner /> : null}
      {pokemon ? (
        <div className="border-solid border-2 border-blue-400 p-4 bg-red rounded-md">
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        </div>
      ) : null}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCatchPokemon}
      >
        Catch pokemon
      </button>
    </div>
  );
};
