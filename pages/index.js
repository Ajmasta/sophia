import Head from 'next/head'
import AboutUs from '../components/aboutUs'
import BusinessPanel from '../components/businessPanel'
import FirstPanel from '../components/firstPanel'
import NavBar from '../components/navbar'
import PortfolioTiles from '../components/portfolioTiles'
import SecondPanel from '../components/secondPanel'
import WebPanel from '../components/webPanel'

import styles from '../styles/Home.module.css'


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
        <meta property="og:image" content="/images/Logo.png" key="ogimage" />
        <meta property="og:site_name" content="Sophia" key="ogsitename" />
        <meta property="og:title" content="Web Development and Business Consulting" key="ogtitle" />
        <meta property="og:description" content="One stop solution for web development and business consulting in Montreal" key="ogdesc" />

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
