import styles from "./textPicturePanel.module.css"
import Image from 'next/image'
import Head from "next/head"
const TextPicturePanel=({text,picture}) =>{ 



    return ( 
        <>

        <div className={styles.spacer}></div>
        <div className={styles.container}>
        
            <div className={styles.pictureContainer}> 
                <Image className={styles.picture} width={600} height={400} src={picture} alt="cute cat" />
                <div className={styles.pictureBackgroundBlack}></div>
                <div className={styles.pictureBackgroundGold}></div>

            </div>
            <div className={styles.textContainer}> 
            <h2 className={styles.title}> Web Design</h2>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Websites from scratch</li>
                <li className={styles.listElement}>Wordpress websites</li>
                <li className={styles.listElement}>Progressive Web Apps</li>
                <li className={styles.listElement}>React-native apps</li>
                </ul>
                <button className={styles.button}>LEARN MORE</button>
            </div>
           
        
        </div>
        <div className={styles.spacer}></div>
        </>
    )
}

export default TextPicturePanel