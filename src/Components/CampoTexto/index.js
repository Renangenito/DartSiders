import styles from './CampoTexto.module.css'

function CampoTexto ({label, type, placeholder, valor, onChange}){
    return(
        <div className={styles.campoTexto}>
            <label>{label}</label>
            <input
                type={type} 
                placeholder={placeholder} 
                value={valor}
                onChange={onChange}
                />
        </div>
    )
}

export default CampoTexto;