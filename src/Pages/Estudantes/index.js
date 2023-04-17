import ItemLista from '../../Components/ItemLista';
import LayoutPadrao from '../../Components/LayoutPadrao';
import ModalForm from '../../Components/ModalForm/ModalForm';
import styles from './Estudantes.module.css';
import { useEffect, useState } from 'react'

function Estudantes() {
    const [estudantes, setEstudantes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/estudantes')
            .then(resposta => resposta.json())
            .then(dados => setEstudantes(dados))
    }, [])

    const [modalIsOpen, setIsOpen] = useState(false);
    
    function aoSalvar(){
        console.log("TESTE: ")
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <LayoutPadrao>
            <div className={styles.estudantes}>
                <div className={styles.estudantesTituloBotao}>
                    <h1 className={styles.tituloEstudantes}>Lista de Estudantes</h1>
                    <button className={styles.botaoAdicionar} onClick={openModal}>Adicionar novos estudantes</button>
                </div>
                <section className={styles.secaoLista}>
                    {estudantes.map(estudante => <ItemLista key={estudante.id} imagemPerfil={estudante.imagem} nome={estudante.nome} email={estudante.email} telefone={estudante.telefone} matricula={estudante.matricula} admissao={estudante.admissao} />)}
                </section>
                <ModalForm titulo="Novo Estudante" texto="Cadastrar" modalIsOpen={modalIsOpen} closeModal={closeModal} enviarDados={aoSalvar}/>
            </div>
        </LayoutPadrao>
    )
}

export default Estudantes;