'use client'
import { useGetPokemonDetailQuery } from '@/app/api/apiSlice'
import React from 'react'


 const PokemonCard = ({params}) => {

  //Determinamos el valor del param para mandar al back
let id = params.id
const {data: pokemon, isError, isLoading, error } = useGetPokemonDetailQuery(id)

//Seteamos las situaciones de carga de datos y de error
if(isLoading) return <div>Loading...</div>
if(isError) return <div>{error.message} </div>


  return (
    <div>
    <h2 className='text-5xl text-center capitalize pb-3 font-bold text-blue-500' >{pokemon.name}</h2>
   <div className='md:flex text-3xl pt-1 justify-evenly'>
    <img className='relative bottom-16' src={pokemon.sprite} alt={pokemon.name}></img>
    <ul className='pt-9 space-y-2 text-lg'>     
    <li className='capitalize'>Type: <span className='font-bold'>{pokemon.types.join('/')}</span></li>
    <li>Hp: <span className='font-bold'>{pokemon.stats.find(stat => stat.name === 'hp').value}</span></li>
    <li>Attack: <span className='font-bold'>{pokemon.stats.find(stat => stat.name === 'attack').value}</span></li>
    <li>Defense: <span className='font-bold'>{pokemon.stats.find(stat => stat.name === 'defense').value}</span></li>
    <li>Special Attack: <span className='font-bold'>{pokemon.stats.find(stat => stat.name === 'special-attack').value}</span></li>
    <li>Special Defense: <span className='font-bold'>{pokemon.stats.find(stat => stat.name === 'special-defense').value}</span></li>
    <li>Speed: <span className='font-bold'>{pokemon.stats.find(stat => stat.name === 'speed').value}</span></li>
    <li className='capitalize'>Ability: <span className='font-bold'>{pokemon.ability.join(' / ')}</span></li>
    <li>Height: <span className='font-bold'>{pokemon.height}</span> lbs</li>
    <li>Weight: <span className='font-bold'>{pokemon.weight}</span> lbs</li>
</ul>

    </div>
 
    </div>
  )
}
export default PokemonCard;