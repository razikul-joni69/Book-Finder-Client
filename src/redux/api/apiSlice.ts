import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `/api/v1/books`,
        }),
    }),
});

export const { useGetBooksQuery } = api;
