'use client'
import React from 'react'
import { useGetPokemonQuery } from '../api/apiSlice'


export const PokemonList = () => {
const {data, isError, isLoading, error} = useGetPokemonQuery()


if(isLoading) return <div>Loading...</div>
if(isError) return <div>{error.message} </div>
console.log(data[0])
  return (
    <div>
<ul>
    {data.map((pokemon) => {
      return  <li>{pokemon.name}</li>
    })}
</ul>

    </div>
  )
}
