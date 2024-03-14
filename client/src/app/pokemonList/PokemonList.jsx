'use client'
import { useRef, useState } from 'react'
import { useGetPokemonQuery } from '../api/apiSlice'
import Link from 'next/link'


export const PokemonList = () => {
  const [page, setPage] = useState(1)
  const { data: pokemon, isError: getPokemonIsError, isLoading: getPokemonLoading, error: getPokemonError } = useGetPokemonQuery(page)

  const tableRef = useRef();
  function scrollToTop() {
    tableRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  const changePag = (e) => {
    if(e === '+' && page < 48){
      scrollToTop()
      return setPage(page + 1)}
    if (e === '-' && page >= 2){
      scrollToTop()
      return setPage(page - 1)}
  }

  if(getPokemonLoading) return <div>Loading...</div>
  if(getPokemonIsError) return <div>{getPokemonError.message} </div>

  return (
    <div   className='h-screen flex justify-center items-center flex-col'>
      <table ref={tableRef}  className='table-auto w-4/5 mx-auto my-8 text-center relative top-16'>
        <thead className='bg-gray-800 text-white'>
          <tr>
            <th className='p-2'>Name</th>
            <th className='p-2'>Type</th>
            <th className='p-2'>HP</th>
            <th className='p-2'>Attack</th>
            <th className='p-2'>Defense</th>
            <th className='p-2'>Special Attack</th>
            <th className='p-2'>Special Defense</th>
            <th className='p-2'>Speed</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.map((pokemon) => (
            <tr key={pokemon.id} className='border-b border-gray-200'>
              <Link href={`/pokemon/${pokemon.id}`}>
                <td className='p-2 text-left text-blue-500 hover:underline' style={{textTransform: 'capitalize'}}>{pokemon.name}</td>
              </Link>
              <td className='p-2' style={{textTransform: 'capitalize'}}>{pokemon.types.join('/')}</td>
              <td className='p-2'>{pokemon.stats.find(stat => stat.name === 'hp').value}</td>
              <td className='p-2'>{pokemon.stats.find(stat => stat.name === 'attack').value}</td>
              <td className='p-2'>{pokemon.stats.find(stat => stat.name === 'defense').value}</td>
              <td className='p-2'>{pokemon.stats.find(stat => stat.name === 'special-attack').value}</td>
              <td className='p-2'>{pokemon.stats.find(stat => stat.name === 'special-defense').value}</td>
              <td className='p-2'>{pokemon.stats.find(stat => stat.name === 'speed').value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center space-x-4 relative top-14'>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={() => changePag('-')}>Prev</button>
        <span>{page}</span>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600' onClick={() => changePag('+')}>Next</button>
      </div>
    </div>
  )
}
