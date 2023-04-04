import styles from './CardInicio.module.css'

function CardInicio({texto, quantidade, imagem, alt}) {
    return (
            <div className={styles.cardInicio}>
                {imagem}
                <p className={styles.texto}>{texto}</p>
                <p className={styles.quantidade}>{quantidade}</p>
            </div>
    )
}

export default CardInicio;