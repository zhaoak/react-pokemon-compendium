import React from 'react';
import './Main.css';

import { usePokemon } from '../../hooks/usePokemon.js';

import QueryFilter from '../QueryFilter/QueryFilter.js';
import TypeFilter from '../TypeFilter/TypeFilter.js';
import PokeDisplay from '../PokeDisplay/PokeDisplay.js';
import Header from '../Header/Header.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, handleQueryChange, loading } = usePokemon();

  return (
    <div className="Main">
      <Header />
      <div className="interface">
        <QueryFilter handleQueryChange={handleQueryChange} />
        <TypeFilter types={types} handleTypeChange={handleTypeChange} />
      </div>
      <PokeDisplay pokemon={pokemon} loading={loading} />
    </div>
  );
}
