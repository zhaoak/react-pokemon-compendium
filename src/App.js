import './App.css';
import { usePokemon } from './hooks/usePokemon.js';

import PokemonCard from './components/PokemonCard/PokemonCard.js';

// import components

function App() {
  const pokemon = usePokemon();
  return (
    <div className="App">
      <PokemonCard />
    </div>
  );
}

export default App;
