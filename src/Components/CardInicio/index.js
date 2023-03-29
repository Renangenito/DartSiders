import styles from './CardInicio.module.css'

function CardInicio({texto, quantidade, imagem, alt}) {
    return (
            <div className={styles.cardInicio}>
                <img className={styles.image} src={imagem} alt={alt} style={{ fill: "red" }} />
                <p className={styles.texto}>{texto}</p>
                <p className={styles.quantidade}>{quantidade}</p>
            </div>
    )
}

export default CardInicio;