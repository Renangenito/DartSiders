import styles from './Input.module.css'

function Input({ label, type, placeholder, valor, aoAlterado }) {

    function aoDigitar(e){
        aoAlterado(e.target.value)
    }
   
    return (
        <div className={styles.input}>
            <label>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={valor}
                onChange={aoDigitar}
                />
        </div>
    )
}

export default Input;