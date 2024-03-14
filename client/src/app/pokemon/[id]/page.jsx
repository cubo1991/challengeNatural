'use client'
import { useGetPokemonDetailQuery } from '@/app/api/apiSlice'
import React from 'react'

 const PokemonCard = ({params}) => {
let id = params.id
const {data: pokemon, isError, isLoading, error } = useGetPokemonDetailQuery(id)


if(isLoading) return <div>Loading...</div>
if(isError) return <div>{error.message} </div>


  return (
    <div>
    <h2 style={{textTransform: 'capitalize'}} >{pokemon.name}</h2>
    <img src={pokemon.sprite} alt={pokemon.name}></img>
     <ul>     
        <li style={{textTransform: 'capitalize'}}>Type: {pokemon.types.join('/')}</li>
        <li>Hp: {pokemon.stats.find(stat => stat.name === 'hp').value}</li>
        <li>Attack: {pokemon.stats.find(stat => stat.name === 'attack').value}</li>
        <li>Defense: {pokemon.stats.find(stat => stat.name === 'defense').value}</li>
        <li>Special Attack: {pokemon.stats.find(stat => stat.name === 'special-attack').value}</li>
        <li>Special Defense: {pokemon.stats.find(stat => stat.name === 'special-defense').value}</li>
        <li>Speed: {pokemon.stats.find(stat => stat.name === 'speed').value}</li>
        <li style={{textTransform: 'capitalize'}}>Ability: {pokemon.ability.join(' and ')}</li>
        <li>Height: {pokemon.height} lbs</li>
        <li>Weight: {pokemon.weight} lbs</li>
              </ul>
 
    </div>
  )
}
export default PokemonCard;