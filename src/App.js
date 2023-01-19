import './App.css';
import { usePokemon } from './hooks/usePokemon.js';

// import components

function App() {
  const pokemon = usePokemon();
  console.log(pokemon);
  return <div className="App"></div>;
}

export default App;
