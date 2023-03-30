import styles from './BarraPesquisa.module.css';
import logoDartsiders from '../../assets/logo-dartsiders.png';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";

import { AiOutlineSearch } from "react-icons/ai";

function BarraPesquisa({handleClickHumburgher, show}) {


    return (
        <div className={styles.barraPesquisa}>
            <div className={styles.barraMobile}>
                <IoChevronBackCircleOutline />
                <img className={styles.logoMobile} src={logoDartsiders} alt="imagem do logo dartsiders"/>
                {show ? <AiOutlineMenu onClick={handleClickHumburgher}/> : 
                <AiOutlineClose onClick={handleClickHumburgher}/>} 
             
            </div>
            <div className={styles.barraInput}>
                <input type="text" placeholder="Digite sua busca" /> 
                <AiOutlineSearch />
            </div>
        </div>
    );
}

export default BarraPesquisa;
