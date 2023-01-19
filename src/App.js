import './App.css';
import { usePokemon } from './hooks/usePokemon.js';

import TypeFilter from './components/TypeFilter/TypeFilter.js';
import PokeDisplay from './components/PokeDisplay/PokeDisplay.js';

// import components

function App() {
  const { pokemon, types, handleTypeChange } = usePokemon();

  return (
    <div className="App">
      <div className="interface">
        <TypeFilter types={types} handleTypeChange={handleTypeChange} />
      </div>
      <PokeDisplay pokemon={pokemon} />
    </div>
  );
}

export default App;
