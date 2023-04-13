import styles from './Input.module.css'

function Input({ label, type, placeholder }) {
    return (
        <div className={styles.input}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input;