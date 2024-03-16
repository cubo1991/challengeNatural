import React from 'react'
import {Spinner} from "@nextui-org/spinner";


const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'> 

      <Spinner size="lg" color="danger" label="Wait a pokemoment please" /> 
    </div>
    
  )
}

export default Loading
