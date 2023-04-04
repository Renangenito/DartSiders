import styles from './Inicio.module.css';
import CardInicio from "../../Components/CardInicio";
import LayoutPadrao from '../../Components/LayoutPadrao';
import { FiBookmark } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

function Inicio() {
    return (
        <LayoutPadrao>
            <div className={styles.inicio}>
                <h1 className={styles.tituloInicio}>Início</h1>
                <section className={styles.secaoCards}>
                    <CardInicio texto="Cursos" quantidade="13" imagem={<FiBookmark />} alt="Ícone de curso" />
                    <CardInicio texto="Estudantes" quantidade="243" imagem={<SlGraduation />} alt="Ícone de Estudante" />
                    <CardInicio texto="Pagamentos" quantidade="556,000" imagem={<RiMoneyDollarBoxLine />} alt="Ícone de Pagamento" />
                    <CardInicio texto="Relatórios" quantidade="3" imagem={<HiOutlineDocumentReport />} alt="Ícone de Relatório" />
                </section>
            </div>
        </LayoutPadrao>
    )
}

export default Inicio;