import styles from './card.module.css';

function Card ({nome='nenhum', curso='nenhum'}) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src="https://via.placeholder.com/150" alt="Foto" />
            <h2 className={styles.cardTitle}>Nome: {nome}</h2>
            <p className={styles.cardText}>Curso: {curso}</p>
        </div>
    );
}

export default Card;