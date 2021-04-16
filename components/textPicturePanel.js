import styles from "./textPicturePanel.module.css"
import Image from 'next/image'
import Head from "next/head"
const TextPicturePanel=({text,picture}) =>{ 



    return ( 
        <>

        <div className={styles.spacer}></div>
        <div className={styles.container}>
        
            <div className={styles.pictureContainer}> 
                <Image  width={500} height={500} src={picture} alt="cute cat" />
            </div>
            <div className={styles.textContainer}> 
            <h2 className={styles.title}> Web Design</h2>
                <p className={styles.text}>{text} </p>
                <button className={styles.button}>LEARN MORE</button>
            </div>
           
        
        </div>
        <div className={styles.spacer}></div>
        </>
    )
}

export default TextPicturePanel