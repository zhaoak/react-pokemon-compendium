import { useEffect, useState } from 'react';
import { fetchAllPokemon, fetchTypes, fetchPokemonByFilter } from '../services/fetchPokemon.js';

export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [typeFilter, setTypeFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  // type state
  // selected type state

  // on initial render
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetchAllPokemon('');
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
    setTypeFilter(type);
    const data = await fetchPokemonByFilter(type, query);
    setPokemon(data);
    setLoading(false);
  };

  const handleQueryChange = async (queryText) => {
    setLoading(true);
    setQuery(queryText);
    const data = await fetchPokemonByFilter(typeFilter, queryText);
    setPokemon(data);
    setLoading(false);
  };

  return { pokemon, types, handleTypeChange, handleQueryChange, loading };
}
