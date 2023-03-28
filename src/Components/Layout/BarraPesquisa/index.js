import styles from './BarraPesquisa.module.css';
import { AiOutlineSearch } from "react-icons/ai";

function BarraPesquisa() {
    return (
        <div className={styles.barraPesquisa}>
            <div className={styles.barraInput}>
                <input type="text" placeholder="Digite sua busca" /> 
                <AiOutlineSearch />
            </div>
        </div>
    );
}

export default BarraPesquisa;
