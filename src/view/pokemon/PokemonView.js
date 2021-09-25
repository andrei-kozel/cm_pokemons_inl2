import { useHistory } from "react-router-dom";
import { PokemonImage } from "../../components/pokemon-history-card/PokemonImage";

export const PokemonView = () => {
  let history = useHistory();
  const pokemon = history.location.state;

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-row items-center">
        <div className="w-72 m-4">
          <PokemonImage pokemon={pokemon} />
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-xl font-bold">Ablities:</h2>
            {pokemon.abilities.map((item) => {
              return <p key={item.ability.name}>{item.ability.name}</p>;
            })}
          </div>
          <div>
            <h2 className="text-xl font-bold">Forms:</h2>
            {pokemon.forms.map((item) => {
              return <p key={item.name}>{item.name}</p>;
            })}
          </div>
        </div>
      </div>
      <div>
        <button
          className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};
