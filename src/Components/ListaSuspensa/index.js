import styles from "./ListaSuspensa.module.css";

function ListaSuspensa({itens, label, valor, onChange}) {
  return (
    <div className={styles.listaSuspensa}>
        <label>{label}</label>
      <select name="select" onChange={onChange}>
        <option value="1" defaultValue='' >
          -- Selecione --
        </option>
        {
            itens.map((item) => (
                <option key={item.text} value={valor}>{item.text}</option>
            ))
        }
        
      </select>
    </div>
  );
}

export default ListaSuspensa;
