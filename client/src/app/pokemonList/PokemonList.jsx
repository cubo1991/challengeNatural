'use client'
import { useContext, useEffect, useRef, useState } from 'react'
import { useGetPokemonQuery } from '../api/apiSlice'
import Link from 'next/link'
import Loading from '../../Components/Loading'
import ErrorMessage from '../../Components/ErrorMessage'
import { ThemeContext } from '@/context/ThemeContext'
import { colorTheme } from '@/Components/colorTheme'


export const PokemonList = () => {

  //Lógca para los colores por tipo
  const theme = useContext(ThemeContext);
  const [colorContext, setColorContext] = useState(theme.color);
  const [color, setColor] = useState(colorContext);

  const [page, setPage] = useState(1)
  const { data: pokemon, isError: getPokemonIsError, isLoading: getPokemonLoading, error } = useGetPokemonQuery(page)

  useEffect(() => {
    setColor(theme.color);
  }, [colorContext, theme.color]);
  

  let colors = colorTheme(color);



  //Esta es la lógica para volver al principio de la tabla cuando cambiamos de página
  const tableRef = useRef();
  function scrollToTop() {
    tableRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  //Función para cambiar de página, recibe un string '+' o '-' para aumentar o disminuir la página en 1.
  const changePag = (e) => {
    if(e === '+' && page < 48){
      scrollToTop()
      return setPage(page + 1)}
    if (e === '-' && page >= 2){
      scrollToTop()
      return setPage(page - 1)}
  }

  //Seteamos las situaciones de carga de datos y de error
  if(getPokemonLoading) return <div><Loading/></div>
  if(getPokemonIsError) return <div>{<ErrorMessage error={error.data}/>} </div>

  console.log(colors)

  return (
    <div   className='h-screen flex justify-center items-center flex-col'>
      <table ref={tableRef}  className='table-auto w-4/5 mx-auto my-8 text-center relative top-16'>
        <thead className={`${colors.bg} text-white`}>
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

                <td className='p-2 text-left text-blue-500 hover:underline' style={{textTransform: 'capitalize'}}>            <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name}   </Link></td>
          
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
