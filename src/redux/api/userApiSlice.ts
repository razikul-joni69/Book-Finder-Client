import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApiSlice = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: (email) => `/api/v1/users/${email}`,
        }),
    }),
});

export const { useGetUserQuery } = userApiSlice;
