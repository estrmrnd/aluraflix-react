import styles from './Rodape.module.css';
import logo from './logo.png';

function Rodape() {
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt='logo AluraFlix'></img>
        </footer>
    )
}

export default Rodape;