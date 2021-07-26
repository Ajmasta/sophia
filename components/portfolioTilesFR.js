
import Image from "next/image"
import styles from "./portfolioTiles.module.css"

const PortfolioTiles = () => {



    return ( 
        <>
        <div className={styles.body}>
        <p className={styles.title}>Nos Partenaires</p>
<div className={styles.tilesContainer}>

<div className={styles.portfolioTile}> 
        <Image className={styles.image} src="/images/BacktoHealthLogo.png" width="304" height="152"></Image>

        </div>
        <div id={styles.portfolioTilePhoenix} className={styles.portfolioTile}> 
        
        <Image id={styles.imagePhoenix} className={styles.image} src="/images/phoenixLogo.png" width="300" height="109"></Image>
      
        </div>
       
        <div className={styles.portfolioTile}>
        <Image className={styles.image} src="/images/stefanMorissetPhoto.png" width="468" height="206"></Image>
         </div>



</div>
</div>
</>
    )
}

export default PortfolioTiles