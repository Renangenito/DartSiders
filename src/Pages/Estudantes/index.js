import ItemLista from "../../Components/ItemLista";
import LayoutPadrao from "../../Components/LayoutPadrao";
import ModalForm from "../../Components/ModalForm/ModalForm";
import styles from "./Estudantes.module.css";
import { useEffect, useState } from "react";

function Estudantes() {
  const [estudantes, setEstudantes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [estudanteSelecionado, setEstudanteSelecionado] = useState(null)

  const url = "http://localhost:8080/estudantes";

  useEffect(() => {
    fetch("http://localhost:8080/estudantes")
      .then((resposta) => resposta.json())
      .then((dados) => setEstudantes(dados));
  }, [estudantes]);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function aoSubmeter(estudante) {
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



  function abrirModalParaEdicao(estudante){
    setEstudanteSelecionado(estudante)
    console.log("ESTUDANTE AQUI: ", estudante)
    openModal();
  }

  function abrirModalParaSalvar(){
    setEstudanteSelecionado("")
    openModal(); 
  }
  return (
    <LayoutPadrao>
      <div className={styles.estudantes}>
        <div className={styles.estudantesTituloBotao}>
          <h1 className={styles.tituloEstudantes}>Lista de Estudantes</h1>
          <button className={styles.botaoAdicionar} onClick={abrirModalParaSalvar}>
            Adicionar novos estudantes
          </button>
        </div>
        <section className={styles.secaoLista}>
          {estudantes.map((estudante) => (
            <ItemLista
              key={estudante.id}
              id={estudante.id}
              imagemPerfil={estudante.imagem}
              nome={estudante.nome}
              email={estudante.email}
              telefone={estudante.telefone}
              matricula={estudante.matricula}
              admissao={estudante.admissao}
              abrirModalParaEdicao={() => abrirModalParaEdicao(estudante)}
            />
          ))}
        </section>
        {modalIsOpen && (
        <ModalForm
          estudante={estudanteSelecionado}
          aoSubmeter={aoSubmeter}
          titulo={estudanteSelecionado ? "Editando estudante" : "Novo Estudante"}
          texto={estudanteSelecionado ? "Editar" : "Cadastrar"}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
        )}
      </div>
    </LayoutPadrao>
  );
}

export default Estudantes;
