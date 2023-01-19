import './App.css';
import { usePokemon } from './hooks/usePokemon.js';

import PokemonCard from './components/PokemonCard/PokemonCard.js';

// import components

function App() {
  const pokemon = usePokemon();
  return (
    <div className="App">
      <section className="card-display">
        <PokemonCard
          name="Bonkados"
          type1="smelly"
          type2="horrible"
          img_url="http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
        />
      </section>
    </div>
  );
}

export default App;
