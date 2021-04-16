import Head from 'next/head'
import FirstPanel from '../components/firstPanel'
import HoverButtonPanel from '../components/hoverButtonPanel'
import NavBar from '../components/navbar'
import NumberedListContainer from '../components/numberedListContainer'
import TextPicturePanel from '../components/textPicturePanel'
import WebPanel from '../components/webPanel'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <NavBar />
    <FirstPanel />
    <div className={styles.container}>
      <Head>
        <title>Digital Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WebPanel picture={"/images/webDesign.jpg"} 
      text={"we offer digital solutions that will help you expand your business, be more efficient, and gain a strong digital presence"}/>
    <HoverButtonPanel />
    <NumberedListContainer />
    </div>
    </>
  )
}
