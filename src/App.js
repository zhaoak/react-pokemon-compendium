import './App.css';
import { usePokemon } from './hooks/usePokemon.js';

import PokemonCard from './components/PokemonCard/PokemonCard.js';
import TypeFilter from './components/TypeFilter/TypeFilter.js';

// import components

function App() {
  const { pokemon, types, handleTypeChange } = usePokemon();

  return (
    <div className="App">
      <div className="interface">
        <TypeFilter types={types} handleTypeChange={handleTypeChange} />
      </div>
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
    </div>
  );
}

export default App;
