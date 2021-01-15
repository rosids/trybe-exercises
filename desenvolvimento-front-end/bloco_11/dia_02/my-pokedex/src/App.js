import React from 'react';

import pokemons from './data';
import Pokedex from './Pokedex';

import './App.css';

function App() {
  return (
    <main className='App'>
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons}/>
    </main>
  );
}

export default App;
