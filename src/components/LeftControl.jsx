import React from 'react'

function LeftControl({ handleDirection }) {
  return (
    <div className='w-32 h-63 border-4 rounded-xl grid grid-cols-3 grid-rows-3 place-items-center'>
      
      <div></div>
      <button 
        onClick={() => handleDirection('up')}
        className='bg-gray-300 w-10 h-10'
      >↑</button>
      <div></div>

      <button 
        onClick={() => handleDirection('left')}
        className='bg-gray-300 w-10 h-10'
      >←</button>

      <div className='w-6 h-6 bg-gray-500 rounded'></div>

      <button 
        onClick={() => handleDirection('right')}
        className='bg-gray-300 w-10 h-10'
      >→</button>

      <div></div>
      <button 
        onClick={() => handleDirection('down')}
        className='bg-gray-300 w-10 h-10'
      >↓</button>
      <div></div>

    </div>
  )
}

export default LeftControl