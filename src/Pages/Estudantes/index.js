import LayoutPadrao from '../../Components/LayoutPadrao';
import styles from './Estudantes.module.css';

function Estudantes() {
    return (
        <LayoutPadrao>
            <div className={styles.estudantes}>
                <div className={styles.estudantesTituloBotao}>
                    <h1 className={styles.tituloEstudantes}>Lista de Estudantes</h1>
                    <button className={styles.botaoAdicionar}>Adicionar novos estudantes</button>
                </div>
                <section className={styles.secaoLista}>
                    Lista
                </section>
            </div>
        </LayoutPadrao>
    )
}

export default Estudantes;