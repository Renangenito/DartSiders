import styles from './CampoTexto.module.css'

function CampoTexto ({label, type = 'text', placeholder, valor, onChange}){
    return(
        <div className={styles.campoTexto}>
            <label>{label}</label>
            <input
                type={type} 
                placeholder={placeholder} 
                value={valor}
                onChange={evento => onChange(evento.target.value)}
                />
        </div>
    )
}

export default CampoTexto;