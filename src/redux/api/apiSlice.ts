import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "books",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    tagTypes: ["reviews", "wishlist", "updateBook"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => `/api/v1/books`,
            providesTags: ["updateBook"],
        }),
        getBookById: builder.query({
            query: (id) => `/api/v1/book/${id}`,
            providesTags: ["updateBook"],
        }),
        postReview: builder.mutation({
            query: ({ id, review }) => ({
                url: `/api/v1/comment/${id}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: ["reviews"],
        }),
        getReviews: builder.query({
            query: (id) => `/api/v1/comment/${id}`,
            providesTags: ["reviews"],
        }),
        addToWishlist: builder.mutation({
            query: ({ email, book, cart }) => ({
                url: `/api/v1/book/${email}?cart=${cart}`,
                method: "POST",
                body: book,
            }),
        }),
        getWishlist: builder.query({
            query: (email) => `/api/v1/book/${email}`,
        }),
        updateBook: builder.mutation({
            query: ({ id, book }) => ({
                url: `/api/v1/book/edit/${id}`,
                method: "PATCH",
                body: book,
            }),
            invalidatesTags: ["updateBook"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/api/v1/book/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["updateBook"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookByIdQuery,
    usePostReviewMutation,
    useGetReviewsQuery,
    useAddToWishlistMutation,
    useGetWishlistQuery,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = api;
