import React from 'react'

const PropsMotos = (props) => {


 return (
    <div>
        <h1>Componente Props Motos</h1>
        <p>Moto nome: {props.moto} </p>
        <p>Moto Ano: {props.ano}</p>
        <p>Moto Tipo: {props.tipo}</p>
        <p>Moto Cor: {props.cor}</p>
        <p>Moto Preço: R$ {props.carroPreco}</p>
    </div>
  )
}

export default PropsMotos
