import { useNavigate } from "react-router-dom";

export default function PokemonCard({
  pokemon,
  isSelected,
  addPokemon,
  removePokemon,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon-detail?id=${pokemon.id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <p>{pokemon.korean_name}</p>
        <p>No. {pokemon.id}</p>
      </div>
      {isSelected ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            removePokemon(pokemon);
          }}
        >
          삭제
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            addPokemon(pokemon);
          }}
        >
          추가
        </button>
      )}
    </div>
  );
}
