import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendStatsApi = createApi({
  reducerPath: 'friendStatsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['FriendStats'],
  endpoints(builder){
    return{
      // GET
      getFriendStats: builder.query({
        query: (userId) => ({
          url: `/users/${userId}`
        }),
        providesTags: ['FriendStats']
      })
    }
  }
})

export const { useGetFriendStatsQuery } = friendStatsApi