export async function fetchAllPokemon() {
  const response = await fetch(
    'https://alchemy-pokedex.herokuapp.com/api/pokedex?page=1&perPage=800'
  );
  const data = await response.json();
  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}

export async function fetchPokemonByFilter(type, query) {
  if (type === 'all') return await fetchAllPokemon();
  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?type=${type}&pokemon=${query}&perPage=800`
  );
  const data = await response.json();
  return data.results;
}
