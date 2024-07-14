import styles from './Error404.module.css'

function Error404() {

    return (
        <>
            <p className={styles.zoom_area}>Lo siento no se encontro la pagina buscada.</p>
            <h1>Error</h1>
            <section className={styles.error_container}>
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </section>
            
        </>
    )
}

export default Error404