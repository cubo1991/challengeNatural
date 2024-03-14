'use client'
import {useState} from 'react'
import { useGetPokemonQuery } from '../api/apiSlice'
import Link from 'next/link'



export const PokemonList = () => {
  const [page, setPage] = useState(1)
const {data: pokemon, isError: getPokemonIsError, isLoading: getPokemonLoading, error: getPokemonError} = useGetPokemonQuery(page)





const changePag = (e) => {
  if(e === '+' && page < 48){return setPage(page + 1)}
  if (e === '-' && page >= 2){return setPage(page - 1)}
}
 

if(getPokemonLoading) return <div>Loading...</div>
if(getPokemonIsError) return <div>{getPokemonError.message} </div>

  return (
    <div>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>HP</th>
      <th>Attack</th>
      <th>Defense</th>
      <th>Special Attack</th>
      <th>Special Defense</th>
      <th>Speed</th>
    </tr>
  </thead>
  <tbody>
    {pokemon.map((pokemon) => (
      <tr key={pokemon.id}>
     <Link href={`/pokemon/${pokemon.id}`}>   <td>{pokemon.name}</td> </Link>
        <td>{pokemon.types.join('/')}</td>
        <td>{pokemon.stats.find(stat => stat.name === 'hp').value}</td>
        <td>{pokemon.stats.find(stat => stat.name === 'attack').value}</td>
        <td>{pokemon.stats.find(stat => stat.name === 'defense').value}</td>
        <td>{pokemon.stats.find(stat => stat.name === 'special-attack').value}</td>
        <td>{pokemon.stats.find(stat => stat.name === 'special-defense').value}</td>
        <td>{pokemon.stats.find(stat => stat.name === 'speed').value}</td>
      </tr>
    ))}
  </tbody>
</table>
<div>
<button onClick={() => changePag('-')}>Prev</button>
{page}
<button onClick={() => changePag('+')}>Next</button>
</div>
    </div>
  )
}
