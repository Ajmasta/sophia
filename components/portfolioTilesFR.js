
import Image from "next/image"
import styles from "./portfolioTiles.module.css"

const PortfolioTiles = () => {



    return ( 
        <>
        <div className={styles.body}>
        <p className={styles.title}>Nos Projets Précédents</p>
<div className={styles.tilesContainer}>

<a href="https://getbacktohealth.ca"><div className={styles.portfolioTile}> 
        <Image className={styles.image} src="/images/BacktoHealthLogo.png" width="304" height="152"></Image>

        </div></a>
        <a href="https://phoenixgmi.com"><div id={styles.portfolioTilePhoenix} className={styles.portfolioTile}> 
        
        <Image id={styles.imagePhoenix} className={styles.image} src="/images/phoenixLogo.png" width="300" height="109"></Image>
      
        </div></a>
       
        <a href="https://www.instagram.com/stefanmorisset/?hl=en"><div className={styles.portfolioTile}>
        <Image className={styles.image} src="/images/stefanMorissetPhoto.png" width="468" height="206"></Image>
         </div></a>



</div>
</div>
</>
    )
}

export default PortfolioTiles