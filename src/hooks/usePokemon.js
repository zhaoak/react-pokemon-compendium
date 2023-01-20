import { useEffect, useState } from 'react';
import { fetchAllPokemon, fetchTypes, fetchPokemonByType } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  // type state
  // selected type state

  // on initial render
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchAllPokemon();
      setPokemon(data);
      setLoading(false);
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
    setLoading(true);
    const data = await fetchPokemonByType(type);
    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, types, handleTypeChange, loading };
}
