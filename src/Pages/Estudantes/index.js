import ItemLista from '../../Components/ItemLista';
import LayoutPadrao from '../../Components/LayoutPadrao';
import styles from './Estudantes.module.css';
import { useEffect, useState } from 'react'

function Estudantes() {
    const [estudantes, setEstudantes] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/estudantes')
            .then(resposta => resposta.json())
            .then(dados => setEstudantes(dados))
    }, [])

    return (
        <LayoutPadrao>
            <div className={styles.estudantes}>
                <div className={styles.estudantesTituloBotao}>
                    <h1 className={styles.tituloEstudantes}>Lista de Estudantes</h1>
                    <button className={styles.botaoAdicionar}>Adicionar novos estudantes</button>
                </div>
                <section className={styles.secaoLista}>
                    {estudantes.map(estudante => <ItemLista key={estudante.id} imagemPerfil={estudante.imagem} nome={estudante.nome} email={estudante.email} telefone={estudante.telefone} matricula={estudante.matricula} admissao={estudante.admissao} />)}
                </section>
            </div>
        </LayoutPadrao>
    )
}

export default Estudantes;