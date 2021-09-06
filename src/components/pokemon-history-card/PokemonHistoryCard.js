import React from "react";

export const PokemonHistoryCard = ({ pokemon }) => {
  const capitilize = (word) => {
    const lower = word.toLowerCase();
    const capitilized = word.charAt(0).toUpperCase() + lower.slice(1);
    return capitilized.replace("-", " ");
  };

  return (
    <div className="m-3 w-60">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full object-cover object-center rounded-lg shadow-md bg-blue-300"
      />

      <div className="relative px-4 -mt-16  ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="mt-1 text-xl font-semibold uppercase leading-tight">
            {capitilize(pokemon.name)}
          </h4>

          <div className="mt-1">
            Attack:{" "}
            {pokemon.stats.map((stat) => {
              if (stat.stat.name === "attack") {
                return (
                  <span key={stat.base_stat} className="text-gray-600 text-sm">
                    {stat.base_stat}
                  </span>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
