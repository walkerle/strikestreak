import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: 1 }

const userSlice = createSlice({ // This is the reducer function
  name: 'user', // state name in the store
  initialState,
  // immer library lets us write state change as a "mutation", but clones state an replace with new state under the hood
  reducers: {
    setUserId(state, action) { // This is the dispatch action function
      state.id = action.payload;
    }
  }
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer