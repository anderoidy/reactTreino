import "./GameOver.css"
import React from "react"

const GameOver = ({retry, score}) => {
  return (
    <div className="gameover">
      <h1>Fim do Jogo</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Reinicializar o Jogo</button>
    </div>
  )
}

export default GameOver