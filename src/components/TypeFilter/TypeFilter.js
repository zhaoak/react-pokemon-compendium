import React from 'react';
import './TypeFilter.css';

export default function TypeFilter({ types, handleTypeChange }) {
  return (
    <div className="type-filter-section">
      <label>
        Filter by type:
        <select className="pokemon-select" onChange={(e) => handleTypeChange(e.target.value)}>
          <option className="type-option" key="all" value="all">
            All
          </option>
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
