'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useSearchPokemonQuery } from '../api/apiSlice'
import Link from 'next/link'

const SearchResult = () => {


let searchParams = useSearchParams();
let query = searchParams.get("query");

const { data: pokemon, isError, isLoading, error } = useSearchPokemonQuery(query);

if(isLoading) return <div>Loading...</div>
if(isError) return <div>{error.message} </div>


return (
 <div>
    <h2 className='pb-8 pt-3 font-bold text-3xl border text-center'> Pokemon search result </h2>

{
        pokemon.length >= 1
        ?
        <ul  className="space-y-2">
        {Object.keys(pokemon).map((key) => {
          return  <Link href={`/pokemon/${pokemon[key].id}`}><li className="p-4 border rounded shadow text-center capitalize" key={pokemon[key].id}>{pokemon[key].name}</li></Link>
        })}
      </ul>
      :
      <ul className="space-y-2">
      <Link href={`/pokemon/${pokemon.id}`}> <li className="p-4 border rounded shadow text-center capitalize" key={pokemon.id}> {pokemon.name}</li></Link>
    </ul>
    
 
}
  </div>
   )

}

export default SearchResult


