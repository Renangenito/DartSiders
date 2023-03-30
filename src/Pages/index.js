import styles from './Inicio.module.css';
import CardInicio from "../Components/CardInicio";
import cursos from '../assets/iconesInicio/cursos.svg';
import estudante from '../assets/iconesInicio/estudante.svg';
import pagamento from '../assets/iconesInicio/pagamento.svg';
import relatorio from '../assets/iconesInicio/relatorio.svg';
import LayoutPadrao from '../Components/LayoutPadrao';

function Inicio() {
    return (
        <LayoutPadrao>
            <div className={styles.inicio}>
                <h1 className={styles.tituloInicio}>Início</h1>
                <section className={styles.secaoCards}>
                    <CardInicio texto="Cursos" quantidade="13" imagem={cursos} alt="Ícone de curso" />
                    <CardInicio texto="Estudantes" quantidade="243" imagem={estudante} alt="Ícone de Estudante" />
                    <CardInicio texto="Pagamentos" quantidade="556,000" imagem={pagamento} alt="Ícone de Pagamento" />
                    <CardInicio texto="Relatórios" quantidade="3" imagem={relatorio} alt="Ícone de Relatório" />
                </section>
            </div>
        </LayoutPadrao>
    )
}

export default Inicio;