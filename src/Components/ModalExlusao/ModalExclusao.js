import Modal from "react-modal";
import styles from "./ModalExclusao.module.css";
import { AiOutlineClose } from "react-icons/ai";
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  },
  content: {
    width: "300px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
  },
};
function ModalExclusao({ titulo, texto, modaDeleteOpen, modaDeleteclose }) {
  return (
    <Modal
      isOpen={modaDeleteOpen}
      onRequestClose={modaDeleteclose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <div className={styles.modalHeader}>
        <h2>{titulo}</h2>
        <AiOutlineClose title="Fechar" onClick={modaDeleteclose}/>
      </div>
      <p className={styles.modalTexto}>{texto}</p>
      <div className={styles.modalButtons}>
        <button className={styles.modalButtonSubmit}>Excluir</button>
        <button className={styles.modalButtonClose} onClick={modaDeleteclose}>Cancelar</button>
      </div>
    </Modal>
  );
}

export default ModalExclusao;
