import { createSlice } from '@reduxjs/toolkit'

export const pokemonToSearchSlice = createSlice({
  name: 'pokemonToSearch',
  initialState: {
    value: '',
  },
  reducers: {
    updatePokemonToSeach: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, updatePokemons } = pokemonToSearchSlice.actions

export const selectPokemons = (state) => state.pokemons.value

export default pokemonToSearchSlice.reducer