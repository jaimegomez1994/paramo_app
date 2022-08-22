import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducers from '../components/container/pokemonsSlice'
import pokemonsToShowReducers from '../components/listing/pokemonsToShowSlice';
import pokemonToSearchReducers from '../components/search/pokemonToSearchSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonsReducers,
    pokemonsToShow: pokemonsToShowReducers,
    pokemonToSearch: pokemonToSearchReducers
  },
});
