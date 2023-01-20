import React from 'react';
import './PokeDisplay.css';

import PokemonCard from '../PokemonCard/PokemonCard.js';

export default function PokeDisplay({ pokemon, loading }) {
  if (loading) return <p>loading the mons</p>;
  return (
    <section className="card-display">
      {pokemon.map((mon) => (
        <PokemonCard
          key={mon._id}
          name={mon.pokemon}
          type1={mon.type_1}
          type2={mon.type_2}
          img_url={mon.url_image}
        />
      ))}
    </section>
  );
}
