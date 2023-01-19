# README

![wireframe](./wireframe.png)

Hook folder

- usePokemon.js

services folder

- fetchPokemon.js

## States (usePokemon.js)

- pokemon, setPokemon
- type, setType
- selectedType, setSelectedType

## Hooks (usePokemon.js)

- usePokemon
  - use resp from fetch to setPokemon
  - handleTypeChange

## Plan

1. Write fetch functions in fetchPokemon.js
2. Set states in usePokemon.js
3. App send props/functions/states to components
   1. make components
   2. import hook
   3. distribute props/states/functions to components
   4. map pokemon arr to PokemonCard component

## Plan 2: poke filter bugaloo

1. fetchTypes (fetchPokemon.js)
2. add type, setType useState (usePokemon.js)
3. setType in some sort of function inside of useEffect (usePokemon.js)
4. Import types from usePokemon.js and pass as prop to <TypeFilter /> (App.js)

## Plan 3: augh

1. write fetchPokemonByType fetch function
2. write handleTypeChange function in hook
3. pass handleTypeChange to type select component
4. onChange of type select dropdown, call handleTypeChange

## Plan 4: giggity goo

1.
