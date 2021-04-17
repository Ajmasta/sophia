import Head from 'next/head'
import BusinessPanel from '../components/businessPanel'
import FirstPanel from '../components/firstPanel'
import HoverButtonPanel from '../components/hoverButtonPanel'
import NavBar from '../components/navbar'
import NumberedListContainer from '../components/numberedListContainer'
import ParallaxPanel from '../components/parallaxPanel'
import SecondPanel from '../components/secondPanel'
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
     
      <BusinessPanel picture={"/images/business.jpg"}  />
      
     <ParallaxPanel />
 
    </div>
    </>
  )
}
