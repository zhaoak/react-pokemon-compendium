import { useEffect, useState } from 'react';
import { fetchAllPokemon } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  // type state
  // selected type state

  // on initial render
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);
  return pokemon;
}
