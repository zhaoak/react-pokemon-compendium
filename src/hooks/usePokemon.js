import { useEffect, useState } from 'react';
import { fetchAllPokemon, fetchTypes, fetchPokemonByType } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    const data = await fetchPokemonByType(type);
    setPokemon(data);
  };
  return { pokemon, types, handleTypeChange };
}
