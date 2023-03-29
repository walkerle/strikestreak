import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

const gameSlice = createSlice({ // This is the reducer function
  name: 'game', // state name in the store
  initialState,
  // immer library lets us write state change as a "mutation", but clones state an replace with new state under the hood
  reducers: {
    setGame(state, action) { // This is the dispatch action function
      state.value = action.payload;
    }
  }
})

export const { setGame } = gameSlice.actions
export default gameSlice.reducer