import { createSlice } from '@reduxjs/toolkit'

export const pokemonsToShowSlice = createSlice({
  name: 'pokemonsToShow',
  initialState: {
    value: 0,
  },
  reducers: {
    updatePokemonsToShow: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { updatePokemonsToShow } = pokemonsToShowSlice.actions

export const selectPokemonsToShow = (state) => state.pokemonsToShow.value

export default pokemonsToShowSlice.reducer