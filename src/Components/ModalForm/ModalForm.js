import Modal from "react-modal";
import Input from "../Input";
import styles from "./ModalForm.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 9999,
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

function ModalForm({ modalIsOpen, closeModal, titulo, texto, aoSubmeter, editandoSim }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [matricula, setMatricula] = useState("");
  const [admissao, setAdmissao] = useState("");
  const [imagem, setImagem] = useState("");

  function handleImagemSelecionada(event) {
    const arquivo = event.target.files[0];
    const leitor = new FileReader();
    leitor.onload = () => {
      setImagem(leitor.result);
    };
    leitor.readAsDataURL(arquivo);
  }


  function aoEnviarDados() {
  console.log("TESTE Salvar")

    const estudante = {
      nome,
      email,
      telefone,
      matricula,
      admissao,
      imagem,
    };
    aoSubmeter(estudante)

    setNome("");
    setEmail("");
    setTelefone("");
    setMatricula("");
    setAdmissao("");
    setImagem("");

    closeModal();
  }
 function EditarDados(){
  console.log("TESTE Editar")
 }
  
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
        <AiOutlineClose title="Fechar" onClick={closeModal} />
      </div>
      <p className={styles.modalTexto}>{texto}</p>
      <form>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Input
          label="Email"
          type="email"
          placeholder="email@exemplo.com"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <Input
          label="Telefone"
          type="tel"
          placeholder="Digite o seu Telefone"
          valor={telefone}
          aoAlterado={(valor) => setTelefone(valor)}
        />
        <Input
          label="Matrícula"
          type="text"
          placeholder="Digite o número da matrícula"
          valor={matricula}
          aoAlterado={(valor) => setMatricula(valor)}
        />
        <Input
          label="Data Admissão"
          type="date"
          valor={admissao}
          aoAlterado={(valor) => setAdmissao(valor)}
        />
        <label style={{ fontWeight: "bold" }}>Selecionar Imagem</label>
        <input
          style={{ marginTop: ".5em" }}
          type="file"
          valor={imagem}
          onChange={handleImagemSelecionada}
        />
      </form>
      <div className={styles.modalButtons}>
        <button className={styles.modalButtonSubmit} onClick={editandoSim ? EditarDados : aoEnviarDados}>
          Salvar
        </button>
        <button className={styles.modalButtonClose} onClick={closeModal}>
          Fechar
        </button>
      </div>
    </Modal>
  );
}

export default ModalForm;
