import styles from "./DadosPessoaiForm.module.css";
import CampoTexto from "../../Components/CampoTexto";
import Botao from "../../Components/Botao";
import ListaSuspensa from "../../Components/ListaSuspensa";
import { useCadastroUsuarioContext } from "../../Contexto/UsuarioCadastro";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

function DadosPessoaisForm() {
  
  const {
    usuario,
    setNomeCompleto,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    setUf,
    submeterUsuario
    
  } = useCadastroUsuarioContext();

  function finalizarCadastro(event){
    event.preventDefault();
    submeterUsuario();
  };
 
  return (
    <div className={styles.telaDeDadosCadastrais}>
      <div className={styles.caixaFormulario}>
        <h2>Cadastro pessoal</h2>
        <p>Insira seus dados para criar sua conta:</p>
        <form onSubmit={finalizarCadastro}>
          <CampoTexto
            label="Nome"
            placeholder="Digite seu nome"
            valor={usuario.nomeCompleto}
            onChange={setNomeCompleto}
          />
          <div className={styles.divInput}>
            <ListaSuspensa
              label="Estados"
              itens={estadosBrasileiros}
              valor={usuario.uf}
              onChange={setUf}
            />
            <CampoTexto
              label="Cidade"
              placeholder="Digite sua cidade"
              valor={usuario.cidade}
              onChange={setCidade}
            />
          </div>
          <CampoTexto
            label="E-mail"
            placeholder="Digite o seu nome Email"
            valor={usuario.email}
            onChange={setEmail}
          />
          <div className={styles.divInput}>
            <CampoTexto
              label="Senha"
              placeholder="Digite a sua senha"
              valor={usuario.senha}
              onChange={setSenha}
            />
            <CampoTexto
              label="Confirme sua senha"
              placeholder="Digite novamente"
              valor={usuario.senhaConfirmada}
              onChange={setSenhaConfirmada}
            />
          </div>
          <Botao tipo="submit" children="Cadastrar" />
        </form>
      </div>
    </div>
  );
}

export default DadosPessoaisForm;
