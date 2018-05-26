import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PokedexVisual from '../../components/pokedex/Pokedex';

const PokemonQuery = gql`
  query {
    allPokemons {
      id
      url
      name
    }
  }
`;

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: null,
      currentPokemonIndex: 0,
    };

    this.getPokemon = this.getPokemon.bind(this);
    this.changePokemonIndex = this.changePokemonIndex.bind(this);
  }

  getPokemon() {
    const { pokemons } = this.props;
    const { currentPokemonIndex } = this.state;
    if (pokemons.length) {
      this.setState({
        pokemon: pokemons.length ? pokemons[currentPokemonIndex] : null,
      });
    }
  }

  changePokemonIndex(action) {
    const { pokemons } = this.props;
    const { currentPokemonIndex } = this.state;

    let newCurrentPokemonIndex = 0;

    if (action === 'plus') {
      const expectedNew = currentPokemonIndex + 1;
      newCurrentPokemonIndex = expectedNew === pokemons.length ? 0 : expectedNew;
    } else {
      const expectedNew = currentPokemonIndex - 1;
      newCurrentPokemonIndex = expectedNew < 0 ? pokemons.length - 1 : expectedNew;
    }

    this.setState({
      currentPokemonIndex: newCurrentPokemonIndex,
    }, () => this.getPokemon());
  }

  render() {
    const { pokemon } = this.state;

    if (!pokemon) this.getPokemon();

    return (
      <div>
        <PokedexVisual
          onNext={() => this.changePokemonIndex('plus')}
          onBack={() => this.changePokemonIndex('minus')}
          pokemon={pokemon}
        />
      </div>
    )
  }
}

Pokedex.defaultProps = {
  pokemons: [],
};

Pokedex.query = PokemonQuery;

export default graphql(
  PokemonQuery, {
    props: ({ data: { allPokemons: pokemons } }) => ({
      pokemons,
    })
  },
)(Pokedex)
