import "./App.css";
import PropsCarros from "./components/carros";
import PropsMotos from "./components/motos";


// import {useState, useEffect} from "react"

// const url = "http://localhost:3000/produtos"

function App() {
  // const[products, setProducts] = useState([])

  // 1 - resgatando dados
  // useEffect(async () => {
  //   const res = await fetch(url)

  //   const data = await res.json()

  //   setProducts(data)
  // }, [])

  // console.log(products)

  const myFunction = (a, b) => {
    return a + b
  }

  return (
    <div className="App">
      <h1>Cadastro de produtos</h1>
      <div className="form-group">
        <label htmlFor="nickName">Nome</label>
        <input
          type="text"
          className="form-control"
          id="nickName"
          placeholder="Usuário"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Senha"
        />
      </div>
      <h3>Usuário</h3>
      <select name="select">
        <option value="valor1">Selecione</option>
        <option value="valor2" selected>
          Valor 2
        </option>
        <option value="valor3">Valor 3</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>

      <PropsCarros funcao={myFunction} carros="picasso" ano="2004" tipo="Utilitário" cor="Cinza"  carroPreco="15.000"/>
      <PropsMotos moto="Hornet" ano="2006"/>

    </div>
  );
}

export default App;
