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

function ModalForm({
  modalIsOpen,
  closeModal,
  titulo,
  texto,
  aoSubmeter,
  estudante,
}) {
  const [nome, setNome] = useState(estudante?.nome || "");
  const [email, setEmail] = useState(estudante?.email || "");
  const [telefone, setTelefone] = useState(estudante?.telefone || "");
  const [matricula, setMatricula] = useState(estudante?.matricula || "");
  const [admissao, setAdmissao] = useState(estudante?.admissao || "");
  const [imagem, setImagem] = useState(estudante?.imagem || "");
  // const url = "http://localhost:8080/estudantes";

  function handleImagemSelecionada(event) {
    const arquivo = event.target.files[0];
    const leitor = new FileReader();
    leitor.onload = () => {
      setImagem(leitor.result);
    };
    leitor.readAsDataURL(arquivo);
  }

  function aoEnviarDados() {

    const estudante = {
      nome,
      email,
      telefone,
      matricula,
      admissao,
      imagem,
    };
    aoSubmeter(estudante);
    fecharModal();
  }
  function EditarDados() {
    const estudanteEditado = {
      nome,
      email,
      telefone,
      matricula,
      admissao,
      imagem,
    };
    fetch(`http://localhost:8080/estudantes/${estudante.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudanteEditado),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

      fecharModal();
  }

  function fecharModal(){
    setNome("");
    setEmail("");
    setTelefone("");
    setMatricula("");
    setAdmissao("");
    setImagem("");
    closeModal()
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
            <AiOutlineClose title="Fechar" onClick={fecharModal} />
          </div>
          <p className={styles.modalTexto}>{texto}</p>
          <form >
            <Input
              label="Nome"
              type="text"
              placeholder="Digite o seu nome"
              valor={nome}
              aoAlterado={(valor) => setNome(valor)}
              obrigatorio={true}
            />
            <Input
              label="Email"
              type="email"
              placeholder="email@exemplo.com"
              valor={email}
              aoAlterado={(valor) => setEmail(valor)}
              obrigatorio={true}

            />
            <Input
              label="Telefone"
              type="tel"
              placeholder="Digite o seu Telefone"
              valor={telefone}
              aoAlterado={(valor) => setTelefone(valor)}
              obrigatorio={true}

            />
            <Input
              label="Matrícula"
              type="text"
              placeholder="Digite o número da matrícula"
              valor={matricula}
              aoAlterado={(valor) => setMatricula(valor)}
              obrigatorio={true}

            />
            <Input
              label="Data Admissão"
              type="date"
              valor={admissao}
              aoAlterado={(valor) => setAdmissao(valor)}
              obrigatorio={true}

            />
            <label style={{ fontWeight: "bold" }}>Selecionar Imagem</label>
            <input
              style={{ marginTop: ".5em" }}
              type="file"
              valor={imagem}
              onChange={handleImagemSelecionada}
              obrigatorio={true}

            />
          </form>
          <div className={styles.modalButtons}>
            <button
              className={styles.modalButtonSubmit}
              onClick={estudante ? EditarDados : aoEnviarDados}
            >
              Salvar
            </button>
            <button className={styles.modalButtonClose} onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </Modal>
    
  );
}

export default ModalForm;
