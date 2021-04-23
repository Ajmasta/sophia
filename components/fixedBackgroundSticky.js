import FixedBackground from "./fixedBackground"
import styles from "./fixedBackgroundSticky.module.css"


const FixedBackgroundSticky = () => {



    return(
        <div className={styles.container}>
        <div className={styles.filler}>a</div>
            <img src="/images/montrealNight2.jpg" width={1200} height={800}  loading="lazy" className={styles.image} alt="montreal at night" /> 
            <div className={styles.filler}>a</div>
        
        </div>
    )
}

export default FixedBackgroundSticky