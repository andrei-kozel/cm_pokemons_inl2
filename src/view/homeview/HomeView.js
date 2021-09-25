import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "../../components/spinner/Spinner";
import { PokemonContext } from "../../shared/provider/pokemons/pokemons";
import { AuthenticationContext } from "../../shared/provider/auth";

export const HomeView = () => {
  const [error, setError] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useContext(PokemonContext);
  const [user] = useContext(AuthenticationContext);

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
          setPokemon({ ...result, owner: user });
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

  const savePokemon = () => {
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      {error ? <p className="text-sm mb-4 text-red-400">{error}</p> : null}

      {isLoading ? <Spinner /> : null}
      {pokemon ? (
        <div className="border-solid border-2 border-blue-400 p-4 bg-red rounded-md ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-72"
            />
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
      {pokemon ? (
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={savePokemon}
        >
          Save
        </button>
      ) : null}
    </div>
  );
};
