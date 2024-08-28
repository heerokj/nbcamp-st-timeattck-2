import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
  return (
    <Container>
      <h3>나만의 포켓몬</h3>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <div>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={true}
              removePokemon={removePokemon}
            />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  border: 1px solid gray;
`;
