import styles from './BarraPesquisa.module.css';
import logoDartsiders from '../../assets/logo-dartsiders.png';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


function BarraPesquisa({handleClickHumburgher, show}) {

    const navigate = useNavigate();

    return (
        <div className={styles.barraPesquisa}>
            <div className={styles.barraMobile}>
                <IoChevronBackCircleOutline onClick={() => navigate(-1)}/>
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
