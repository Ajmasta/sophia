import Head from 'next/head'
import FirstPanel from '../components/firstPanel'
import HoverButtonPanel from '../components/hoverButtonPanel'
import NavBar from '../components/navbar'
import NumberedListContainer from '../components/numberedListContainer'
import SecondPanel from '../components/secondPanel'
import SocialPanel from '../components/socialPanel'
import TextPicturePanel from '../components/textPicturePanel'
import WebPanel from '../components/webPanel'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
        <title>SOPHIA</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />

    
    
    <div className={styles.container}>
    <FirstPanel />
    <SecondPanel />
      <WebPanel picture={"/images/webDesign.jpg"} 
      />
     <SecondPanel />
    <HoverButtonPanel />
    <NumberedListContainer />
    </div>
    </>
  )
}
