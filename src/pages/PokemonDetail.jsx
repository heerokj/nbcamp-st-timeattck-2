import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";

const PokemonDetail = () => {
  const location = useLocation();
  const pokemonId = location.search.substr(4);
  const selectedPokemon = MOCK_DATA.find((poke) => poke.id == pokemonId);

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <img src={selectedPokemon.img_url} alt="" />
      </div>
      <div>
        <h3>{selectedPokemon.korean_name}</h3>
        <p>타입 : {selectedPokemon.types}</p>
        <p>{selectedPokemon.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/Dex");
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default PokemonDetail;
