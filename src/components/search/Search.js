import { useSelector, useDispatch } from 'react-redux';

import { updatePokemonsToShow} from '../listing/pokemonsToShowSlice';
import { selectPokemons } from '../container/pokemonsSlice';
import { updatePokemonToSearch } from './pokemonToSearchSlice';
import React, { useState } from 'react';

const Search = () => {

  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);

  const [pokemonToSearch, setPokemonToSearch] = useState('');

  const onchangePokemon = (e) => {
    setPokemonToSearch(e);
    dispatch(updatePokemonToSearch(e));
    if (e.length > 0) {
      dispatch(updatePokemonsToShow(pokemons.filter(data => data.pokemon_v2_pokemon.name.includes(e))))
    } else {
      dispatch(updatePokemonsToShow(pokemons.slice(0, 19)));
    }
  }
    
  return <div className=''>
    <input
      placeholder="search your pokemon!"
      className='my-3'
      onChange={(e) => onchangePokemon(e.target.value)}
      value={pokemonToSearch}
    ></input>
  </div>
}

export default Search;