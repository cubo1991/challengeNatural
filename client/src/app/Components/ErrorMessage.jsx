import React from 'react'

const ErrorMessage = ({error}) => {
  return (
    <div className='flex justify-center items-center h-screen'>{error}</div>
  )
}

export default ErrorMessage