import styles from "./webPanel.module.css"
import Image from 'next/image'
import Head from "next/head"
const WebPanel=({text,picture}) =>{ 



    return ( 
        <>

        
        <div className={styles.container}>
        
            <div className={styles.pictureContainer}> 
                <Image className={styles.picture} width={600} height={400} src={picture} alt="cute cat" />
                <div className={styles.pictureBackgroundBlack}></div>
                <div className={styles.pictureBackgroundGold}></div>

            </div>
            <div className={styles.textContainer}> 
            <h2 className={styles.title}> Web Development</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}> Full-stack web development</li>
                <li className={styles.listElement}>Progressive Web Apps</li>
                <li className={styles.listElement}>React-native apps</li>
                <li className={styles.listElement}>Landing Pages</li>
                <li className={styles.listElement}>Wordpress websites</li>
                
                </ul>
            <p className={styles.description}> We believe in the importance of aesthetics, user-friendliness and business-oriented practices for websites. Our team will build future-proof websites and apps that will represent and enhance your brand.</p>
            </div>
                <button className={styles.button}>LEARN MORE</button>
            </div>
           
        
        </div>
        </>
    )
}

export default WebPanel