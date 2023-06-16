import styles from "./ListaSuspensa.module.css";

function ListaSuspensa({itens, label, valor, onChange}) {

  function handleChange(e){
    const novoValor = e.target.value;
    console.log(novoValor)
    onChange(novoValor);
  }

  return (
    <div className={styles.listaSuspensa}>
        <label>{label}</label>
      <select name="select" value={valor} onChange={handleChange}>
        <option value="" defaultValue='' >
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
