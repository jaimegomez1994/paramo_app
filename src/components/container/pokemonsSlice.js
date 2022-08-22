import { createSlice } from '@reduxjs/toolkit'

export const pokemonsSlice = createSlice({
  name: 'pokemonsToSearch',
  initialState: {
    value: 0,
  },
  reducers: {
    updatePokemons: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount, updatePokemons } = pokemonsSlice.actions

export const selectPokemons = (state) => state.pokemons.value

export default pokemonsSlice.reducer