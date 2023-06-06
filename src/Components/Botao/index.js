import styles from './Botao.module.css';

function Botao ({tipo, children}){
    return(
        <div className={styles.botao}>
            <button type={tipo}>
                {children}
            </button>
        </div>
    )
}

export default Botao;