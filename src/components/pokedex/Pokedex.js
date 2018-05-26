import React from 'react';
import styled from 'styled-components';

const PokedexWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  margin-top: 3em;
  background-color: #FB0505;
`;

const PokedexItem = styled.div`
  width: 50%;
  min-height: 10em;
`;

const PokemonImageContainer = styled.div`
  width: 75%;
  border: .5em #C8C8C8 solid;
  margin: 0 auto;
  position: relative;
  min-height: 5em;
  margin-top: 3em;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
`;

const PokemonInformationWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;
  margin-top: 3.5em;
  min-height: 4em;
  text-align: center;
  background-color: #30FB05;
`;

const Text = styled.span`
  position: absolute;
  font-size: 12px;
  margin-top: 2em;
  margin-left: -4em;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: .4em;
  margin-bottom: .2em;
  justify-content: center;
`;

export default ({ onNext, onBack, pokemon }) => (
  <PokedexWrapper>
    <PokedexItem>
      <PokemonImageContainer>
        {
          pokemon &&
          <Image src={pokemon.url} />
        }
      </PokemonImageContainer>
      <ButtonGroup>
        <button
          onClick={onBack}
        >{"<"}</button>
        <button
          onClick={onNext}
        >{">"}</button>
      </ButtonGroup>
    </PokedexItem>
    <PokedexItem>
      <PokemonInformationWrapper>
        {
          pokemon &&
          <Text>{pokemon.name}</Text>
        }
      </PokemonInformationWrapper>
    </PokedexItem>
  </PokedexWrapper>
);
