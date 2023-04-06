import ItemLista from '../../Components/ItemLista';
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
                    <ItemLista nome="Júlia" email="julia@gmail.com" telefone="48 996582154" matricula="1234567305477760" admissao="08/12/2021"/>
                    <ItemLista nome="Júlia" email="julia@gmail.com" telefone="48 996582154" matricula="1234567305477760" admissao="08/12/2021"/>
                    <ItemLista nome="Júlia" email="julia@gmail.com" telefone="48 996582154" matricula="1234567305477760" admissao="08/12/2021"/>
                </section>
            </div>
        </LayoutPadrao>
    )
}

export default Estudantes;