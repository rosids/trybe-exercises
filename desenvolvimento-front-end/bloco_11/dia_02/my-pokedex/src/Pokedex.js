import React, { Component } from 'react';

import Pokemon from './Pokemon';

import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <section className='pokedex'>
        {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </section>
    );
  }
}

export default Pokedex;