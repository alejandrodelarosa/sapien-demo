import React from 'react';
import gql from 'graphql-tag';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Pokedex from './Pokedex';

const POKEMON = {
  url: 'http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/600px-025Pikachu.png',
  name: 'Pikachu',
};

const ACTIONS = {
  onBack: action('onBack'),
  onNext: action('onNext'),
};

storiesOf('Pokedex', module)
  .add('with no pokemon ', () => (
    <Pokedex {...ACTIONS} />
  ))
  .add('with pokemons', () => (
    <Pokedex
      pokemon={POKEMON}
      {...ACTIONS}
    />
  ));
