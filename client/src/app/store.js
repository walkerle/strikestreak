import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userApi } from '../app/services/userApi';
// import someReducer from '../features/reducerfolder/reducername';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware)
  }
})