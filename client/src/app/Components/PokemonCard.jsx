import React from 'react'

const PokemonCard = ({name, sprite, types, stats, ability, height, weight}) => {
  return (
    <div>
    <h2 className='text-5xl text-center capitalize pb-3 font-bold text-blue-500' >{name}</h2>
   <div className='md:flex text-3xl pt-1 justify-evenly'>
    <img className='relative bottom-16' src={sprite} alt={name}></img>
    <ul className='pt-9 space-y-2 text-lg'>     
    <li className='capitalize'>Type: <span className='font-bold'>{types.join('/')}</span></li>
    <li>Hp: <span className='font-bold'>{stats.find(stat => stat.name === 'hp').value}</span></li>
    <li>Attack: <span className='font-bold'>{stats.find(stat => stat.name === 'attack').value}</span></li>
    <li>Defense: <span className='font-bold'>{stats.find(stat => stat.name === 'defense').value}</span></li>
    <li>Special Attack: <span className='font-bold'>{stats.find(stat => stat.name === 'special-attack').value}</span></li>
    <li>Special Defense: <span className='font-bold'>{stats.find(stat => stat.name === 'special-defense').value}</span></li>
    <li>Speed: <span className='font-bold'>{stats.find(stat => stat.name === 'speed').value}</span></li>
    <li className='capitalize'>Ability: <span className='font-bold'>{ability.join(' / ')}</span></li>
    <li>Height: <span className='font-bold'>{height}</span> lbs</li>
    <li>Weight: <span className='font-bold'>{weight}</span> lbs</li>
</ul>

    </div>
 
    </div>
  )
}

export default PokemonCard