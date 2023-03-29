import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mySessionsApi = createApi({
  reducerPath: 'mySessionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['Sessions'],
  endpoints(builder){
    return{
      // GET
      getMySessions: builder.query({
        query: (overallStatId) => ({
          url: `/overall_stats/${overallStatId}/game_sessions`
        }),
        providesTags: ['Sessions']
      }),
      // CREATE
      addSession: builder.mutation({
        query: ({...body}) => ({
          url: `/game_sessions`,
          method: 'POST',
          body
        }),
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(mySessionsApi.util.updateQueryData())
          } catch {
            dispatch(mySessionsApi.util.invalidateTags(['Sessions']))
          }
        }
      }),
      // DELETE
      deleteSession: builder.mutation({
        query: (gameSessionId) => ({
          url: `/game_sessions/${gameSessionId}`,
          method: 'DELETE'
        }),
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(mySessionsApi.util.updateQueryData())
          } catch {
            dispatch(mySessionsApi.util.invalidateTags(['Sessions']))
          }
        }
      })
    }
  }
})

export const { useGetMySessionsQuery, useAddSessionMutation, useDeleteSessionMutation } = mySessionsApi