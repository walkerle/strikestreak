import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allUsersApi = createApi({
  reducerPath: 'allUsersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  tagTypes: ['AllUsers'],
  endpoints(builder){
    return{
      // GET
      getAllUsers: builder.query({
        query: () => ({
          url: `/users`
        }),
        providesTags: ['AllUsers']
      })
    }
  }
})

export const { useGetAllUsersQuery } = allUsersApi