import React from 'react'

function RightControl({ handleSelection }) {
  return (
    <div className='w-32 h-63 border-4 rounded-xl grid grid-cols-3 grid-rows-3 place-items-center'>
      
      <div></div>
      <button className='bg-gray-300 rounded-full w-10 h-10'>X</button>
      <div></div>

      <button className='bg-gray-300 rounded-full w-10 h-10'>Y</button>
      <div></div>
      <button onClick={handleSelection} className='bg-gray-300 rounded-full w-10 h-10'>A</button>

      <div></div>
      <button className='bg-gray-300 rounded-full w-10 h-10'>B</button>
      <div></div>

    </div>
  )
}

export default RightControl