import './App.css';
import DetalhesCarros from './components/DetalhesCarros';

function App() {

  const carList = [
    {id: 1, nome: "Sandeiro", cor: "vermelho", ano: 2010},
    {id: 2, nome: "prisma", cor: "branco", ano: 2018},
    {id: 3, nome: "Picasso", cor: "cinza", ano: 2004}
]

  return (
    <div className="App">
      <h1>Lista de Carros</h1>
      {carList.map((carro)=>(
          <DetalhesCarros 
            key={carro.id}
            nome={carro.nome}
            cor={carro.cor}
            ano={carro.ano}  
          />   
      ))}
                 
    </div>
  );
}

export default App;
