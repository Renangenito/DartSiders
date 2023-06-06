import styles from "./ListaSuspensa.module.css";

function ListaSuspensa({itens, label}) {
  return (
    <div className={styles.listaSuspensa}>
        <label>{label}</label>
      <select name="select">
        <option value="1" defaultValue='' >
          -- Selecione --
        </option>
        {
            itens.map((item) => (
                <option key={item.text} value={item.text}>{item.text}</option>
            ))
        }
        
      </select>
    </div>
  );
}

export default ListaSuspensa;
