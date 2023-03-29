import { configureStore } from "@reduxjs/toolkit";
import { userApi } from './services/userApi';
import { mySessionsApi } from './services/mySessionsApi';
import { myGamesApi } from './services/myGamesApi';
import { friendsApi } from './services/friendsApi';
import { allUsersApi } from './services/allUsersApi';
import { friendStatsApi } from './services/friendStatsApi';
import sessionReducer from '../features/session/sessionSlice';
import gameReducer from '../features/game/gameSlice';
import userReducer from '../features/user/userSlice';
import joinFriendReducer from '../features/joinFriend/joinFriendSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [mySessionsApi.reducerPath]: mySessionsApi.reducer,
    [myGamesApi.reducerPath]: myGamesApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [allUsersApi.reducerPath]: allUsersApi.reducer,
    [friendStatsApi.reducerPath]: friendStatsApi.reducer,
    session: sessionReducer,
    game: gameReducer,
    user: userReducer,
    joinFriend: joinFriendReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      userApi.middleware,
      mySessionsApi.middleware,
      myGamesApi.middleware,
      friendsApi.middleware,
      allUsersApi.middleware,
      friendStatsApi.middleware
    )
  }
})