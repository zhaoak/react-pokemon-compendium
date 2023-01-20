import React from 'react';
import './PokemonCard.css';

import { Link } from 'react-router-dom';

export default function PokemonCard({ name, type1, type2, img_url, hp, species_id }) {
  return (
    <div className="pokemon-card-container">
      <Link to={`/detail/${species_id}`}>
        <img className="pokemon-card-image" src={img_url} alt={name} />
        <p className="pokemon-card-name">{name}</p>
      </Link>
      {type2 === 'NA' ? (
        <p className="pokemon-card-type">Type: {type1}</p>
      ) : (
        <p className="pokemon-card-type">
          Types: {type1} & {type2}
        </p>
      )}
      <p>HP: {hp}</p>
    </div>
  );
}
