import React from 'react'

function RightControl({handleSelection}) {
  return (
    <div className='w-30 h-[200px] border-4 border-round'>
      <button className='flex'>X</button>
      <button className='flex'>Y</button>
      <button className='flex'>B</button>
      <button 
        onClick={handleSelection}
        className=''>A</button>
    </div>
  )
}

export default RightControl
