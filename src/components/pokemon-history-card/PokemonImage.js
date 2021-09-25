export const PokemonImage = ({ pokemon }) => {
  return (
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
      className="w-full object-cover object-center rounded-lg shadow-md bg-blue-300"
    />
  );
};
