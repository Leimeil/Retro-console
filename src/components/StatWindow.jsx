import React from 'react'

function StatWindow({pokemones, position}) {
    console.log(pokemones)
    console.log(position)
    const pokemon= pokemones?.[position-1]

  return (
    <div className='w-[350px] h-[600px] border-solid border-3 overflow-y-auto p-4'>
        <div className='flex gap-4'>
                    <img
                        src={pokemon?.sprites?.front_default}
                        alt={pokemon?.name}
                        className="w-25 h-25"
                        />
                    <img
                        src={pokemon?.sprites?.back_default}
                        alt={pokemon?.name}
                        className="w-25 h-25"
                        />
                </div>
                    <p>ID: {pokemon?.id}</p>
                    <p>Name: {pokemon?.name}</p>
                    <p>MOVES:</p>
                    {pokemon?.moves?.slice(0,15).map((smoves, ind) => (
                        <div key={ind} className='flex justify-between'>
                            <p>{smoves.move.name}</p>
                            <p>Attack: {smoves.attack}</p>
                        </div>
                    ))}
                </div>
            
)}

export default StatWindow

