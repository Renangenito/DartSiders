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
function ModalExclusao({ titulo, texto, modaDeleteOpen, modaDeleteclose, estudante, aoDeletar }) {

function aoDeletarDados(){
  aoDeletar(estudante.id)
  modaDeleteclose();
}

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
        <button type="button" className={styles.modalButtonSubmit} onClick={aoDeletarDados}>Excluir</button>
        <button type="button" className={styles.modalButtonClose} onClick={modaDeleteclose}>Cancelar</button>
      </div>
    </Modal>
  );
}

export default ModalExclusao;
