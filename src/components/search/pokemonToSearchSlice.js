import { createSlice } from '@reduxjs/toolkit'

export const pokemonToSearchSlice = createSlice({
  name: 'pokemonToSearch',
  initialState: {
    value: '',
  },
  reducers: {
    updatePokemonToSearch: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { updatePokemonToSearch } = pokemonToSearchSlice.actions

export const selectPokemonToSearch = (state) => {
  return state.pokemonToSearch.value
}

export default pokemonToSearchSlice.reducer