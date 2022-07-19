
const UserDetails = ({ name, idade, profissao}) => {
    
    return (
    <div>         
        <h2>{name}</h2>
        <h2>{idade}</h2>
        <h2>{profissao}</h2>

        {idade <18 ? (<p>Não pode! pessoa é menor </p>) : (<p>Pode! Pessoa é maior!</p>)}

    </div>
    );
};

export default UserDetails;