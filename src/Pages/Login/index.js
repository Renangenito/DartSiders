import styles from "./Login.module.css";
import logo from "../../assets/logo-dartsiders.png";

function Login() {
  return (
    <div className={styles.telaDeLogin}>
      <div className={styles.caixaFormulario}>
        <img className={styles.caixaLogo} src={logo} alt="Logo do site DartSiders" />
        <h2>Login</h2>
        <p>Insira suas credenciais para acessar sua conta:</p>
        <form>
          <div className={styles.caixaInput}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Digite seu email" id="email" />
          </div>
          <div className={styles.caixaInput}>
            <label htmlFor="senha">Senha</label>
            <input type="text" placeholder="Digite sua senha" id="senha" />
          </div>
          <button type="submit">Login</button>
        </form>
        <a href="https://facebook.com">Esqueci minha senha</a>
      </div>
    </div>
  );
}

export default Login;
