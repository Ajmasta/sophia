import Head from 'next/head'
import AboutUs from '../../components/aboutUsFR'
import BusinessPanel from '../../components/businessPanelFR'
import FirstPanel from '../../components/firstPanelFR'
import NavBar from '../../components/navbar'
import PortfolioTiles from '../../components/portfolioTilesFR'
import SecondPanel from '../../components/secondPanelFR'
import WebPanel from '../../components/webPanelFR'

import styles from '../../styles/Home.module.css'


export default function Home() {


 
  return (
    <>
    <Head>
        <title>SOPHIA</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary" key="twcard" />
        

        {/* Open Graph */}
        <meta property="og:url" content="https://sophia-ajmasta.vercel.app/" key="ogurl" />
        <meta property="og:image" content="/images/owl.png" key="ogimage" />
        <meta property="og:site_name" content="Sophia" key="ogsitename" />
        <meta property="og:title" content="Consultation d'affaires et développement Web" key="ogtitle" />
        <meta property="og:description" content="Une solution tout-en-un pour vos besoin d'entreprises à Montréal" key="ogdesc" />

    </Head>
    <NavBar />

    
    
    <div className={styles.container}>
   
    <FirstPanel />
    <SecondPanel />
      <WebPanel picture={"/images/webDesign.jpg"} 
      />
     
      <BusinessPanel picture={"/images/business.jpg"}  />
      <PortfolioTiles /> 
     <AboutUs />
    
  
 
    </div>
    </>
  )
}
