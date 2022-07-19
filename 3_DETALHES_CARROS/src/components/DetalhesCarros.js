import styles from "./DetalhesCarros.module.css";


const DetalhesCarros = ({nome, cor, ano}) => {
   
  return (
    <div>   
        <h1 className={styles.my_Detalhes}>Detalhes do Carro</h1>   
        <ul className={styles.ul_ListCar}>
            <li>{nome}</li>
            <li>{cor}</li>
            <li>{ano}</li>
        </ul>
    </div>
  )
}

export default DetalhesCarros