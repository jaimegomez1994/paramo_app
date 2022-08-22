import { useSelector, useDispatch } from 'react-redux';

import { updatePokemonsToShow, selectPokemonsToShow } from '../listing/pokemonsToShowSlice';
import { updatePokemons, selectPokemons } from '../container/pokemonsSlice';
import { updatePokemonToSearch, selectPokemonToShow } from './pokemonToSearchSlice';
import React, { useCallback, useRef, useState, useEffect } from 'react';

const Search = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);

  const [pokemonToSearch, setPokemonToSearch] = useState('');

  const onchangePokemon = (e) => {
    setPokemonToSearch(e);
    dispatch(updatePokemonToSearch(e));
    console.log(e);
    if (e.length > 0) {
      dispatch(updatePokemonsToShow(pokemons.filter(data => data.pokemon_v2_pokemon.name.includes(e))))
    } else {
      dispatch(updatePokemonsToShow(pokemons.slice(0, 19)));
    }
  }
    
  return <div>
    search
    <input
      onChange={(e) => onchangePokemon(e.target.value)}
      value={pokemonToSearch}
    ></input>
  </div>
}

export default Search;