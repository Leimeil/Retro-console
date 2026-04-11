import React from 'react'

function GameScreen({myPokeSelection, pcPokeSelection, }) {
    console.log("GameScreen", myPokeSelection)
  return (
    <>
        <div className='w-[450px] h-[200px] overflow-y-auto border-4 border-solid'>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <h2>YOU</h2>
                <img
                src={myPokeSelection[0].sprites?.back_default}
                alt={myPokeSelection.name}
                className="w-25 h-25"
                />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <h2>PC opponent</h2>
                <img
                src={pcPokeSelection[0].sprites?.front_default}
                alt={pcPokeSelection.name}
                className="w-25 h-25"
                />
            </div>
        </div>
    </>
  )
}

export default GameScreen
