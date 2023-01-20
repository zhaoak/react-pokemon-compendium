import React from 'react';
import './PokeDisplay.css';

import PokemonCard from '../PokemonCard/PokemonCard.js';

export default function PokeDisplay({ pokemon, loading }) {
  if (loading) return <p style={{ height: '100vh' }}>loading the mons</p>;
  if (pokemon.length === 0) return <p style={{ height: '100vh' }}>No results found</p>;
  return (
    <section className="card-display">
      {pokemon.map((mon) => (
        <PokemonCard
          key={mon._id}
          _id={mon._id}
          name={mon.pokemon}
          type1={mon.type_1}
          type2={mon.type_2}
          hp={mon.hp}
          img_url={mon.url_image}
        />
      ))}
    </section>
  );
}
