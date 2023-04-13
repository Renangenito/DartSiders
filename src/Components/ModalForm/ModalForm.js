import Modal from 'react-modal';
import Input from '../Input';
import styles from './ModalForm.module.css'
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // define a cor de fundo padrão
        zIndex: 9999, // define a ordem de empilhamento do elemento
    },
    content: {
        width: "300px",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
    },

};

function ModalForm({ modalIsOpen, closeModal, titulo, texto }) {

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
        >
            <div className={styles.modalHeader}>
                <h2>{titulo}</h2>
                <AiOutlineClose title='Fechar' onClick={closeModal}/>
            </div>
            <p className={styles.modalTexto}>{texto}</p>
            <form>
                <Input label="Nome" type="text" placeholder="Digite o seu nome" />
                <Input label="Email" type="email" placeholder="email@exemplo.com" />
                <Input label="Telefone" type="tel" placeholder="Digite o seu Telefone" />
                <Input label="Matrícula" type="text" placeholder="Digite o número da matrícula" />
                <Input label="Data Admissão" type="date" />
            </form>
            <div className={styles.modalButtons}>
                <button className={styles.modalButtonSubmit}>Enviar</button>
                <button className={styles.modalButtonClose} onClick={closeModal}>Fechar</button>
            </div>
        </Modal>
    )
}

export default ModalForm;