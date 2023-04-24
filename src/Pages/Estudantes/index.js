import ItemLista from "../../Components/ItemLista";
import LayoutPadrao from "../../Components/LayoutPadrao";
import ModalForm from "../../Components/ModalForm/ModalForm";
import styles from "./Estudantes.module.css";
import { useEffect, useState } from "react";

function Estudantes() {
  const [estudantes, setEstudantes] = useState([]);
  const url = "http://localhost:8080/estudantes";

  useEffect(() => {
    fetch("http://localhost:8080/estudantes")
      .then((resposta) => resposta.json())
      .then((dados) => setEstudantes(dados));
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function aoSubmeter(estudante) {
    console.log("Testando 123: ", estudante)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudante),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    
  }
  function aoEditar(){
    console.log("Editando.....")
  }

  return (
    <LayoutPadrao>
      <div className={styles.estudantes}>
        <div className={styles.estudantesTituloBotao}>
          <h1 className={styles.tituloEstudantes}>Lista de Estudantes</h1>
          <button className={styles.botaoAdicionar} onClick={openModal}>
            Adicionar novos estudantes
          </button>
        </div>
        <section className={styles.secaoLista}>
          {estudantes.map((estudante) => (
            <ItemLista
              key={estudante.id}
              imagemPerfil={estudante.imagem}
              nome={estudante.nome}
              email={estudante.email}
              telefone={estudante.telefone}
              matricula={estudante.matricula}
              admissao={estudante.admissao}
              aoEditar={aoEditar}
            />
          ))}
        </section>
        <ModalForm
          aoSubmeter={aoSubmeter}
          titulo="Novo Estudante"
          texto="Cadastrar"
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </LayoutPadrao>
  );
}

export default Estudantes;
