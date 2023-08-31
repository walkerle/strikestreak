import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['User'],
  endpoints(builder){
    return{
      // GET data request to the backend
      autoLogin: builder.query({
        query: () => ('/me'), // Path to the backend
        providesTags: ['User'],
      }),

      // POST data request to the backend
      createUser: builder.mutation({
        query: ({...body}) => ({
          url: '/signup',
          method: 'POST',
          body
        }),
        invalidatesTags: ['User']
      }),

      // POST data request to the backend
      loginUser: builder.mutation({
        query: ({...body}) => ({
          url: '/login',
          method: 'POST',
          body
        }),
        // invalidatesTags: ['User'],
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(userApi.util.updateQueryData())
          } catch {
            dispatch(userApi.util.invalidateTags(['User']))
          }
        }
      }),

      // DELETE data request to the backend
      logoutUser: builder.mutation({
        query: () => ({
          url: '/logout',
          method: 'DELETE'
        }),
        // invalidatesTags: ['User'],
        async onQueryStarted(_, {dispatch, queryFulfilled}) {
          try {
            await queryFulfilled
            dispatch(userApi.util.resetApiState())
          } catch {
            dispatch(userApi.util.invalidateTags(['User']))
          }
        }
      })
    }
  }
})

export const { useAutoLoginQuery, useCreateUserMutation, useLoginUserMutation, useLogoutUserMutation } = userApi