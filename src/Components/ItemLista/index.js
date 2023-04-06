import styles from './ItemLista.module.css';
import imagemJulia from '../../assets/imagem-julia.png';
import { SlTrash, SlPencil } from "react-icons/sl";

function ItemLista({ nome, email, telefone, matricula, admissao }) {
    return (
        <div className={styles.itemLista}>
            <img className={styles.imagemPerfil} src={imagemJulia} alt="Imagem da Júlia" />
            <div className={styles.secaoDados}>
                <div className={styles.dadosHeader}>
                    <p>nome</p>
                    <p>email</p>
                    <p>telefone</p>
                    <p>matricula</p>
                    <p>admissao</p>
                </div>
                <div className={styles.dadosPerfil}>
                    <p>{nome}</p>
                    <p>{email}</p>
                    <p>{telefone}</p>
                    <p>{matricula}</p>
                    <p>{admissao}</p>
                </div>
            </div>
            <div className={styles.icones}>
                <SlPencil title='Editar'/>
                <SlTrash title='Excluir'/>
            </div>
        </div>
    )
}

export default ItemLista