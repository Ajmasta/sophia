import Head from "next/head"
import Image from "next/image"
import styles from "./numberedListTextElement.module.css"

const NumberedListElement = ({bigText, text}) => {

    return (
        <>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@900&display=swap" rel="stylesheet" />
        </Head>
        <div className={styles.container}>
            <p className={styles.bigText}>{bigText}</p>
            <p className={styles.text}>{text}</p>
        </div>
        </>

    )
}
export default NumberedListElement