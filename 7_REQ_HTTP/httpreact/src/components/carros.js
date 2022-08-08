import React from 'react'

const PropsCarros = (props) => {

return (
    <selector>
        <h1>Componente Props Carros</h1>
        <p>Função: {props.funcao(3, 6)} </p>
        <p>Carro Nome: {props.carros} </p>
        <p>Carro Ano: {props.ano}</p>
        <p>Carro Tipo: {props.tipo}</p>
        <p>CarroCor: {props.cor}</p>
        <p>Carro Preço: R$ {props.carroPreco}</p>
    </selector>
  )
}

export default PropsCarros