import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myGamesApi = createApi({
  reducerPath: 'myGamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['Games'],
  endpoints(builder){
    // console.log(form)
    return{
      // GET
      getMyGames: builder.query({
        query: (gameSessionId) => ({
          url: `/game_sessions/${gameSessionId}/games`
        }),
        providesTags: ['Games']
        // providesTags: (result, error, arg) =>
        //   result
        //     ? [...result.map(({id}) => ({type: 'Games', id})), 'Games']
        //     : ['Games'],
      }),
      // CREATE
      addGame: builder.mutation({
        query: ({...body}) => ({
          url: `/games`,
          method: 'POST',
          body
        }),
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(myGamesApi.util.updateQueryData())
          } catch {
            dispatch(myGamesApi.util.invalidateTags(['Games']))
          }
        }
      }),
      // UPDATE
      updateGame: builder.mutation({
        query: ({id, ...body}) => {
          // console.log('from myGamesApi: id', id)
          // console.log('from myGamesApi: body', body)
          return ({
          url: `/games/${id}`,
          method: 'PATCH',
          body: body
        })},
        invalidateTags: (results, error, arg) => [{type: 'Games', id: arg.id}],
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(myGamesApi.util.updateQueryData())
          } catch {
            dispatch(myGamesApi.util.invalidateTags(['Games']))
          }
        }
      }),
      // DELETE
      deleteGame: builder.mutation({
        query: (gameId) => ({
          url: `/games/${gameId}`,
          method: 'DELETE'
        }),
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(myGamesApi.util.updateQueryData())
          } catch {
            dispatch(myGamesApi.util.invalidateTags(['Games']))
          }
        }
      })
    }
  }
})

export const { useGetMyGamesQuery, useAddGameMutation, useUpdateGameMutation, useDeleteGameMutation } = myGamesApi