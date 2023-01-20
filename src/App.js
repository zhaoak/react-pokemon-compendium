import './App.css';
import { usePokemon } from './hooks/usePokemon.js';

import QueryFilter from './components/QueryFilter/QueryFilter.js';
import TypeFilter from './components/TypeFilter/TypeFilter.js';
import PokeDisplay from './components/PokeDisplay/PokeDisplay.js';
import Header from './components/Header/Header.js';

// import components

function App() {
  const { pokemon, types, handleTypeChange, handleQueryChange, loading } = usePokemon();

  return (
    <div className="App">
      <Header />
      <div className="interface">
        <QueryFilter handleQueryChange={handleQueryChange} />
        <TypeFilter types={types} handleTypeChange={handleTypeChange} />
      </div>
      <PokeDisplay pokemon={pokemon} loading={loading} />
    </div>
  );
}

export default App;
