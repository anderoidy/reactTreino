import './App.css';
import UserDetails from './componentes/UserDetails';

function App() {

const users = [   
  { id: 1, name: "Anderson", idade: 41, profissao: "analista"},
  { id: 2, name: "Andrew",  idade: 11, profissao: "estudante"},
  { id: 3, name: "Fabiana", idade: 36, profissao: "professora"},
  { id: 4, name: "Sueli", idade: 17, profissao: "comerciante"},
  { id: 5, name: "Gabriel", idade: 11, profissao: "estudante"},
];

  return (
    <div className="App">
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))}
    </div>
  );
}

export default App;
