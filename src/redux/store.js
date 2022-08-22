import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducers from '../components/container/pokemonsSlice'
import pokemonsToShowReducers from '../components/listing/pokemonsToShowSlice';
import pokemonToSearchReducers from '../components/search/pokemonToSearchSlice';
// import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    pokemons: pokemonsReducers,
    pokemonsToShow: pokemonsToShowReducers,
    pokemonToSearch: pokemonToSearchReducers
  },
});
