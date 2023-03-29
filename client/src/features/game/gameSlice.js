import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: 1 }

const gameSlice = createSlice({ // This is the reducer function
  name: 'game', // state name in the store
  initialState,
  // immer library lets us write state change as a "mutation", but clones state an replace with new state under the hood
  reducers: {
    setGameId(state, action) { // This is the dispatch action function
      state.id = action.payload;
    }
  }
})

export const { setGameId } = gameSlice.actions
export default gameSlice.reducer