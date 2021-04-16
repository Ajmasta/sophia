import Head from "next/head"
import Image from "next/image"
import styles from "./numberedListImageElement.module.css"

const NumberedListImageElement = ({image, text,title}) => {

    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.container}>
            <div className={styles.title}><strong>{title}</strong></div>
            <div className={styles.image}><Image src={image} width={125} height={125} /> </div>
            <div className={styles.textContainer}><p className={styles.text}>{text}</p></div>
        </div>
        </>

    )
}
export default NumberedListImageElement