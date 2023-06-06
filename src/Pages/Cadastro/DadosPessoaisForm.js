import styles from "./DadosPessoaiForm.module.css";
import CampoTexto from "../../Components/CampoTexto";
import Botao from "../../Components/Botao";
import ListaSuspensa from "../../Components/ListaSuspensa";

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
  return (
    <div className={styles.telaDeDadosCadastrais}>
      <div className={styles.caixaFormulario}>
        <h2>Cadastro pessoal</h2>
        <p>Insira seus dados para criar sua conta:</p>
        <form>
          <CampoTexto label="Nome" placeholder="Digite seu nome" />
          <div className={styles.divInput}>
            {/* <CampoTexto
              label="Estado"
              placeholder="Digite seu estado"
            /> */}
            < ListaSuspensa label='Estados' itens={estadosBrasileiros}/>
            <CampoTexto
              label="Cidade"
              placeholder="Digite sua cidade"
            />
          </div>
          <CampoTexto label="E-mail" placeholder="Digite o seu nome Email" />
          <div className={styles.divInput}>
            <CampoTexto label="Senha" placeholder="Digite a sua senha" />
            <CampoTexto
              label="Confirme sua senha"
              placeholder="Digite novamente"
            />
          </div>
          <Botao tipo='button' children='Cadastrar'/>
        </form>
      </div>
    </div>
  );
}

export default DadosPessoaisForm;
