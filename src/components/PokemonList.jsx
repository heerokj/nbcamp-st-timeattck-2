import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, addPokemon }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
          isSelected={false}
        />
      ))}
    </div>
  );
};

export default PokemonList;
