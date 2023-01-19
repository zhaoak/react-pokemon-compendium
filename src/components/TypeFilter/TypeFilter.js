import React from 'react';
import './TypeFilter.css';

export default function TypeFilter() {
  return (
    <div>
      <label>
        Filter by type:
        <select className="pokemon-select">
          <option value="">None</option>
        </select>
      </label>
    </div>
  );
}
