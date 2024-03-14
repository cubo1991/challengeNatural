
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery:  fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api'
    }),
    endpoints: (builder) => ({
        getPokemon: builder.query({
            query: (index) => `/pokemonall/${index}`
        }),
        getPokemonDetail: builder.query({
            query: (id) => `/pokemonDetail/${id}`
        })
       
    })
});

export const { useGetPokemonQuery, useGetPokemonDetailQuery } = apiSlice;
