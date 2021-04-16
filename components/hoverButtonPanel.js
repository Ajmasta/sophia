import Head from "next/head"
import Image from "next/image"
import styles from "./hoverButtonPanel.module.css"

const HoverButtonPanel = ({text, image}) => {

    return(
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.container}>
                
                <div className={styles.pictureContainer}>
                <Image width={523} height={447} src="/images/regisbg.jpg" />
                </div>
                <div className={styles.textContainer}>
                <strong className={styles.title}>An intuitive experience</strong>
                   <p className={styles.text}> With 13 years of experience in human resources, my personnal mission is to meet the workforce, performance and stability needs of local businesses and entrepreneurs.
                   </p>
                   <p className={styles.text}>
                    My name is Régis Michaud, and it will be my 
                    pleasure that my team and I will work with you and your company
                     to find, train and integrate the candidate that is right for you.
                     </p>
                </div>
        </div>
        <div className={styles.buttonContainer}>
                    <button className={styles.button}>Meet my team</button>
                </div>

        </>
    )
}

export default HoverButtonPanel