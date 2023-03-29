import { createSlice } from '@reduxjs/toolkit';

const initialState = { id: 1 }

const joinFriendSlice = createSlice({ // This is the reducer function
  name: 'joinFriend', // state name in the store
  initialState,
  // immer library lets us write state change as a "mutation", but clones state an replace with new state under the hood
  reducers: {
    setJoinFriendId(state, action) { // This is the dispatch action function
      state.id = action.payload;
    }
  }
})

export const { setJoinFriendId } = joinFriendSlice.actions
export default joinFriendSlice.reducer