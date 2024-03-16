
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery:  fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api'
    }),

    //Conexión con el Back
    endpoints: (builder) => ({
        getPokemon: builder.query({
            query: (index) => `/pokemonall/${index}`
        }),
        getPokemonDetail: builder.query({
            query: (id) => `/pokemonDetail/${id}`
        }),
        searchPokemon: builder.query({
            query: (query) => `/pokemonQuery?query=${query}`
        })
       
    })
});

export const { useGetPokemonQuery, useGetPokemonDetailQuery, useSearchPokemonQuery } = apiSlice;
