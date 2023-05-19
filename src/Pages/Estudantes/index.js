import ItemLista from "../../Components/ItemLista";
import LayoutPadrao from "../../Components/LayoutPadrao";
import ModalExclusao from "../../Components/ModalExlusao/ModalExclusao";
import ModalForm from "../../Components/ModalForm/ModalForm";
import styles from "./Estudantes.module.css";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

function Estudantes() {
  const [estudantes, setEstudantes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [estudanteSelecionado, setEstudanteSelecionado] = useState(null);
  const url = "http://localhost:8080/estudantes/";
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    fetch(url)
      .then((resposta) => resposta.json())
      .then((dados) => setEstudantes(dados));
  }, [estudantes]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function openModalDelete() {
    setIsOpenDelete(true);
  }
  function modaDeleteclose() {
    setIsOpenDelete(false);
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

      enqueueSnackbar('Estudante adicionado com sucesso!!', { variant: 'success',  anchorOrigin: {horizontal: "center", vertical: "top"}});
  }

  function aoEditar(estudanteEditado, estudanteId) {

    fetch(url + estudanteId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estudanteEditado),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

      enqueueSnackbar('Estudante editado com sucesso!!', { variant: 'success',  anchorOrigin: {horizontal: "center", vertical: "top"}});
  }

  function aoDeletar(id) {
    openModalDelete();
    console.log("ID AQUI: ", id);
  }

  function abrirModalParaEdicao(estudante) {
    setEstudanteSelecionado(estudante);
    openModal();
  }

  function abrirModalParaSalvar() {
    setEstudanteSelecionado("");
    openModal();
  }

  return (
    <LayoutPadrao> 
      <div className={styles.estudantes}>
        <div className={styles.estudantesTituloBotao}>
          <h1 className={styles.tituloEstudantes}>Lista de Estudantes</h1>
          <button
            className={styles.botaoAdicionar}
            onClick={abrirModalParaSalvar}
          >
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
              deletarEstudante={aoDeletar}
            />
          ))}
        </section>
        {modalIsOpen && (
          <ModalForm
            estudante={estudanteSelecionado}
            aoSubmeter={aoSubmeter}
            aoEditar={aoEditar}
            titulo={
              estudanteSelecionado ? "Editando estudante" : "Novo Estudante"
            }
            texto={estudanteSelecionado ? "Editar" : "Cadastrar"}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
        )}
        <ModalExclusao
          modaDeleteOpen={isOpenDelete}
          modaDeleteclose={modaDeleteclose}
          titulo="Excluir Estudante"
          texto="Você quer realmente excluir esse estudante? Não será possível resgatá-lo após a confirmação!"
        />
      </div>
    </LayoutPadrao>
  );
}

export default Estudantes;
