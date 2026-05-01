import React, { useState, useEffect } from 'react'

function GameScreen({ myPokeSelection, pcPokeSelection , setResult}) {

  const [turn, setTurn] = useState("player")
  const [isAttacking, setIsAttacking] = useState(false)

  const [myHP, setMyHP] = useState(100)
  const [pcHP, setPcHP] = useState(100)

  const handleAttack = (move) => {
    if (turn !== "player" || isAttacking) return

    setIsAttacking(true)

    const myDamage = move.attack ?? 10
    const newPcHP = Math.max(pcHP - myDamage, 0)

    setPcHP(newPcHP)
    setTurn("pc")
  }

  useEffect(() => {
    if (turn === "pc" && pcHP > 0) {

      const timeout = setTimeout(() => {

        const pcMoves = pcPokeSelection[0]?.moves?.slice(0, 4) || []
        const randomMove = pcMoves[Math.floor(Math.random() * pcMoves.length)]
        const pcDamage = randomMove?.attack ?? 10

        const newMyHP = Math.max(myHP - pcDamage, 0)
        setMyHP(newMyHP)

        setTurn("player")
        setIsAttacking(false)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [turn])

  useEffect(() => {
    if (myHP === 0 && pcHP === 0) {
      setResult("Empate")
    } else if (pcHP === 0) {
      setResult("¡Ganaste!")
    } else if (myHP === 0) {
      setResult("Perdiste")
    }
  }, [myHP, pcHP])

  return (
    <>
      <div className='w-[450px] h-[250px] overflow-y-auto border-4 border-solid p-2'>

        <div className="flex flex-col items-end">
          <p>HP: {pcHP}/100</p>
          <img
            src={pcPokeSelection[0].sprites?.front_default}
            alt={pcPokeSelection.name}
            className="w-25 h-25"
          />
        </div>

        <div className="flex items-start mt-4 gap-4">
        <div className="flex flex-col items-start">
        <p>HP: {myHP}/100</p>
        <img
        src={myPokeSelection[0].sprites?.back_default}
        alt={myPokeSelection.name}
        className="w-25 h-25"
        />
        </div>

        <div className="grid grid-cols-2 gap-2">
        {myPokeSelection[0].moves?.slice(0,4).map((smoves) => (
        <button
        key={smoves.move.name}
        onClick={() => handleAttack(smoves)}
        className="border p-1 hover:bg-gray-200"
        >
        {smoves.move.name} ({smoves.attack})
      </button>
        ))}
    </div>

        </div>
      </div>
    </>
  )
}

export default GameScreen