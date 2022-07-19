import './Challenge.css'

const Challenge = () => { 
    var a = 10
    var b = 20
    return (
        <div className="blocoChallenge">
            <p>{a}</p>
            <p>{b}</p>

           <button onClick={ () => console.log("Clicou")}>Click aqui </button>
           <button onClick={ ()=> console.log(a + b)}>Clique pra somar</button>
        </div>
    )    
}

export default Challenge