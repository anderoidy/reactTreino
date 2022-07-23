import React from "react"

import "./Game.css"

const Game = ({verifyLatter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLatter}>Finalizar Jogo</button>
    </div>    
  )
}

export default Game