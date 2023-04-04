import React from 'react';
import styles from './SideBar.module.css'
import logo from "../../assets/logo-dartsiders.png"
import fotoPerfil from "../../assets/foto-perfil.png"
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineControl, AiOutlineHome } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { RiMoneyDollarBoxLine, RiLogoutBoxRLine } from "react-icons/ri";
import { HiOutlineDocumentReport } from "react-icons/hi";

function SideBar({ destacado }) {


    const localizacao = useLocation();

    return (

        <div className={destacado ? [styles.mobile, styles.sideBar].join(' ') : styles.sideBar}>

            <img className={styles.sideBar_logo} src={logo} alt="Logo do site DartSiders" />
            <div className={styles.sideBar_usuario}>
                <img src={fotoPerfil} alt="imagem do usuário" />
                <p className={styles.usuario_nome}>João Gonçalves</p>
                <p className={styles.usuario_acesso}>Admin</p>
            </div>
            <nav className={styles.lista_links}>
                <Link to="/" className={`${styles.sideBar_link} ${localizacao.pathname === "/" ? styles.linkDestacado : ''}`}>
                    <div className={styles.link_icone}>
                        <AiOutlineHome />Home
                    </div>
                </Link>
                <Link className={`${styles.sideBar_link} ${localizacao.pathname === "/cursos" ? styles.linkDestacado : ''}`}>
                    <div className={styles.link_icone}>
                        <FiBookmark />Cursos
                    </div>
                </Link>
                <Link to="/estudantes" className={`${styles.sideBar_link} ${localizacao.pathname === "/estudantes" ? styles.linkDestacado : ''}`}>
                    <div className={styles.link_icone}>
                        <SlGraduation />Estudantes
                    </div>
                </Link>
                <Link className={`${styles.sideBar_link} ${localizacao.pathname === "/pagamentos" ? styles.linkDestacado : ''}`}>
                    <div className={styles.link_icone}>
                        <RiMoneyDollarBoxLine />Pagamentos
                    </div>
                </Link>
                <Link className={`${styles.sideBar_link} ${localizacao.pathname === "/relatorios" ? styles.linkDestacado : ''}`}>
                    <div className={styles.link_icone}>
                        <HiOutlineDocumentReport />Relatórios
                    </div>
                </Link>
                <Link className={`${styles.sideBar_link} ${localizacao.pathname === "/configuracoes" ? styles.linkDestacado : ''}`}>
                    <div className={styles.link_icone}>
                        <AiOutlineControl />Configurações
                    </div>
                </Link>
            </nav>

            <p className={styles.sideBar_logout}>Logout<RiLogoutBoxRLine /></p>

        </div>

    )
}

export default SideBar;