import styles from './Card.module.css';
import iconeDeletar from './deletar.png'
import iconeEditar from './editar.png';

function Card({ id, titulo, capa, titulodois, titulotres }) {
    return(
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={iconeDeletar}
            alt='Deletar'
            className={styles.deletar} />
            <img src={iconeEditar}
            alt='Editar'
            className={styles.editar} />
        </div>

    )
}

export default Card;