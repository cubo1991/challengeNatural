import React from 'react'

 const PokemonCard = ({params}) => {
let id = params.id
  return (
    <div>PokemonCard Número {id}</div>
  )
}
export default PokemonCard;