'use client'
import React from 'react'
import ErrorMessage from '@/app/Components/ErrorMessage'
import Loading from '@/app/Components/Loading'
import { useGetPokemonDetailQuery } from '@/app/api/apiSlice'
import PokemonCard from '@/app/Components/PokemonCard'



 const Pokemon = ({params}) => {

  //Determinamos el valor del param para mandar al back
let id = params.id
const {data: pokemon, isError, isLoading, error } = useGetPokemonDetailQuery(id)

//Seteamos las situaciones de carga de datos y de error
if(isLoading) return <div><Loading/></div>
if(isError) return <div>{<ErrorMessage error={error.data}/>} </div>


  return (
    <div>
      <PokemonCard name={pokemon.name} sprite={pokemon.sprite} types={pokemon.types} ability={pokemon.ability} stats={pokemon.stats} weight={pokemon.weight} height={pokemon.height} />
    
 
    </div>
  )
}
export default Pokemon;