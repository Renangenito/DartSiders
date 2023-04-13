import styles from './Inicio.module.css';
import CardInicio from "../../Components/CardInicio";
import LayoutPadrao from '../../Components/LayoutPadrao';
import { FiBookmark } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useEffect, useState } from 'react';

function Inicio() {
    const [dashboard, setDashboard] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/dashboard')
            .then(resposta => resposta.json())
            .then(dados => setDashboard(dados))
    }, [])
    return (
        <LayoutPadrao>
            <div className={styles.inicio}>
                <h1 className={styles.tituloInicio}>Início</h1>
                <section className={styles.secaoCards}>
                    <CardInicio texto="Cursos" quantidade={dashboard.cursos} imagem={<FiBookmark />} alt="Ícone de curso" />
                    <CardInicio texto="Estudantes" quantidade={dashboard.estudantes} imagem={<SlGraduation />} alt="Ícone de Estudante" />
                    <CardInicio texto="Pagamentos" quantidade={dashboard.pagamentos} imagem={<RiMoneyDollarBoxLine />} alt="Ícone de Pagamento" />
                    <CardInicio texto="Relatórios" quantidade={dashboard.relatorios} imagem={<HiOutlineDocumentReport />} alt="Ícone de Relatório" />
                </section>
            </div>
        </LayoutPadrao>
    )
}

export default Inicio;