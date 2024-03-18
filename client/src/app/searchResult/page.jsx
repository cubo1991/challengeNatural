'use client'
import { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { useSearchPokemonQuery } from '../api/apiSlice';
import Link from 'next/link';
import Loading from '@/Components/Loading';
import ErrorMessage from '@/Components/ErrorMessage';



const SearchResult = () => {

  let searchParams = useSearchParams();
  let q = searchParams.get("query");
  const [query, setQuery] = useState(q);
   const { data: pokemon, isError, isLoading, error } = useSearchPokemonQuery(query); 



 

  if(isLoading) return <Loading/>
  if(isError) return <div> {<ErrorMessage error={error.data}/>} </div>

  return (
    <div>
      <h2 className='pb-8 pt-3 font-bold text-3xl border text-center'> Pokemon search result </h2>
      {
        pokemon.length >= 1
        ?
        <ul  className="space-y-2">
        {Object.keys(pokemon).map((key) => {
          return  <Link key={pokemon[key].id} href={`/pokemon/${pokemon[key].id}`}><li  className="p-4 border rounded shadow text-center capitalize" key={pokemon[key].id}>{pokemon[key].name}</li></Link>
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



