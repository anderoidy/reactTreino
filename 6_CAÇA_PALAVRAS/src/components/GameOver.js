import "./GameOver.css"
import React from "react"

const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Fim do Jogo</h1>
      <button onClick={retry}>Reinicializar o Jogo</button>
    </div>
  )
}

export default GameOver