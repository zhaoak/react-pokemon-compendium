import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ name, type1, type2, img_url }) {
  return (
    <div className="pokemon-card-container">
      <img className="pokemon-card-image" src={img_url} alt={name} />
      <p className="pokemon-card-name">{name}</p>
      <p className="pokemon-card-type">{`types: ${type1}, ${type2}`}</p>
    </div>
  );
}
