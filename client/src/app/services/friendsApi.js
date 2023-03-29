import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['Friends'],
  endpoints(builder){
    return{
      // GET
      getMyFriends: builder.query({
        query: (userId) => ({
          url: `/users/${userId}/join_friends`
        }),
        providesTags: ['Friends']
      }),
      // CREATE
      addFriend: builder.mutation({
        query: ({...body}) => ({
          url: `/join_friends`,
          method: 'POST',
          body
        }),
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(friendsApi.util.updateQueryData())
          } catch {
            dispatch(friendsApi.util.invalidateTags(['Friends']))
          }
        }
      }),
      // DELETE
      deleteFriend: builder.mutation({
        query: (joinFriendId) => ({
          url: `/join_friends/${joinFriendId}`,
          method: 'DELETE'
        }),
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(friendsApi.util.updateQueryData())
          } catch {
            dispatch(friendsApi.util.invalidateTags(['Friends']))
          }
        }
      })
    }
  }
})

export const { useGetMyFriendsQuery, useAddFriendMutation, useDeleteFriendMutation } = friendsApi