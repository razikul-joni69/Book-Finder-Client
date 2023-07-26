import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `/api/v1/books`,
        }),
        getBookById: builder.query({
            query: (id) => `/api/v1/book/${id}`,
        }),
        postReview: builder.mutation({
            query: ({id, review}) => ({
                url: `/api/v1/comment/${id}`,
                method: "POST",
                body: review,
            }),
        })
    }),
});

export const { useGetBooksQuery, useGetBookByIdQuery, usePostReviewMutation } = api;
