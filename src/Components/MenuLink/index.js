import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

function MenuLink({ children, to }) {

    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link 
                    to={to}>{children}
                </Link>
            </nav>
        </header>
    )
}

export default MenuLink;