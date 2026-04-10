import React from 'react'

function LeftControl({ handleDirection }) {
  return (
    <div className='w-30 h-[200px] border-4 border-solid flex flex-col gap-2 p-2'>
      <button 
      onClick={() => handleDirection('up')}
      >^</button>
      <button
        onClick={() => handleDirection('left')}
      >left</button>
      <button 
        onClick={() =>handleDirection('down')}
      >v</button>
      <button
        onClick={() => handleDirection('right')}
      >right</button>
    </div>
  )
}

export default LeftControl