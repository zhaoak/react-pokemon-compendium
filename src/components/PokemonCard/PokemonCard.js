import React from 'react';
import './PokemonCard.css';

import { Link } from 'react-router-dom';

export default function PokemonCard({ name, type1, type2, img_url, hp, _id }) {
  return (
    <div className="pokemon-card-container">
      <img className="pokemon-card-image" src={img_url} alt={name} />
      <p className="pokemon-card-name">{name}</p>
      <p className="pokemon-card-type">{`types: ${type1}, ${type2}`}</p>
      <p>HP: {hp}</p>
      <Link to={`/detail/${_id}`}>
        <p>Go to Detail Page</p>
      </Link>
    </div>
  );
}
