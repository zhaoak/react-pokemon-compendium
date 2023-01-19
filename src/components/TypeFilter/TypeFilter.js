import React from 'react';
import './TypeFilter.css';

export default function TypeFilter({ types }) {
  return (
    <div>
      <label>
        Filter by type:
        <select className="pokemon-select">
          {types.map((type) => (
            <option className="type-option" key={type.type} value={type.type}>
              {type.type}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
