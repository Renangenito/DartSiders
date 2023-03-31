import React, { useState } from 'react';
import styles from './SideBar.module.css'
import logo from "../../assets/logo-dartsiders.png"
import fotoPerfil from "../../assets/foto-perfil.png"
import logout from "../../assets/icones/logout.svg"
import homeIcone from "../../assets/icones/home.svg"
import cursosIcone from "../../assets/icones/cursos.svg"
import estudantesIcone from "../../assets/icones/estudantes.svg"
import pagamentosIcone from "../../assets/icones/pagamentos.svg"
import vectorIcone from "../../assets/icones/vector.svg"
import configuracoesIcone from "../../assets/icones/configuracoes.svg"
function SideBar({ destacado }) {

    return (

        <div className={destacado ? [styles.mobile, styles.sideBar].join(' ') : styles.sideBar }>
            
            <img className={styles.sideBar_logo} src={logo} alt="Logo do site DartSiders" />
            <div className={styles.sideBar_usuario}>
                <img src={fotoPerfil} alt="imagem do usuário" />
                <p className={styles.usuario_nome}>João Gonçalves</p>
                <p className={styles.usuario_acesso}>Admin</p>
            </div>
            <ul className={styles.lista_links}>
                <li className={styles.sideBar_link}>
                    <div className={styles.link_icone}>
                        <img src={homeIcone} alt="icone de home" />Home
                    </div>
                </li>
                <li className={styles.sideBar_link}>
                    <div className={styles.link_icone}>
                        <img src={cursosIcone} alt="icone de cursos" />Cursos
                    </div>
                </li>
                <li className={styles.sideBar_link}>
                    <div className={styles.link_icone}>
                        <img src={estudantesIcone} alt="icone de estudantes" />Estudantes
                    </div>
                </li>
                <li className={styles.sideBar_link}>
                    <div className={styles.link_icone}>
                        <img src={pagamentosIcone} alt="icone de pagamentos" />Pagamentos
                    </div>
                </li>
                <li className={styles.sideBar_link}>
                    <div className={styles.link_icone}>
                        <img src={vectorIcone} alt="icone de relatóriois" />Relatórios
                    </div>
                </li>
                <li className={styles.sideBar_link}>
                    <div className={styles.link_icone}>
                        <img src={configuracoesIcone} alt="icone de configurações" />Configurações
                    </div>
                </li>
            </ul>

            <a className={styles.sideBar_logout}>Logout<img src={logout} alt="icone de logout"/></a>

        </div>

    )
}

export default SideBar;