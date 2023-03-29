import styles from "./LayoutPadrao.module.css"

function LayoutPadrao({children}){
    return(
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default LayoutPadrao;