import styles from "./webPanel.module.css"
import Image from 'next/image'
import { useState } from "react"

const WebPanel=({text,picture}) =>{ 
const [active,setActive] = useState("3")

const handleClick = (e) => {
    setActive(e.target.id)
}

    return ( 
        <>

        
        <div className={styles.container}>
        
        <div className={styles.infoDisplay}>
            <div className={styles.pictureContainer}> 
                <Image className={styles.picture} width={600} height={400} src={picture} alt="cute cat" />
                <div className={styles.pictureBackgroundBlack}></div>
                <div className={styles.pictureBackgroundGold}></div>

            </div>
          
            <div className={styles.textContainer}> 
            <div className={styles.infoPicker}>
            <p onClick={handleClick} id="3" className={active==="3"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>Transformation Numérique</p>

            <p onClick={handleClick} id="1" className={active==="1"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>Développement Web</p> 
            <p onClick={handleClick} id="2" className={active==="2"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>Marketing Numérique</p>
        </div>
            {active==="1"?
            <>
            <h2 className={styles.title}> Développement Web</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>  Développement Web Full-Stack</li>
                <li className={styles.listElement}>Web Apps Progressive </li>
                <li className={styles.listElement}>Apps React Native </li>
                <li className={styles.listElement}>Landing Pages</li>
                <li className={styles.listElement}>Websites Wordpress </li>
                
                </ul>
            <p className={styles.description}> 
            Nous sommes convaincus de l'importance de l'esthétique, de la convivialité et des pratiques commerciales pour les sites web. Notre équipe créera des sites et des applications à l'épreuve du temps qui représenteront et renforceront votre marque.
            </p>
            </div>
                
            </>:active==="2"?<> 
            <h2 className={styles.title}> Marketing Numérique </h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Stratégies Marketing </li>
                <li className={styles.listElement}> Marketing Médias Sociaux</li>
                <li className={styles.listElement}>Optimisation SEO </li>
                <li className={styles.listElement}>Image de Marque Web</li>
                <li className={styles.listElement}>Campagnes Publicitaires</li>
                
                
                </ul>
            <p className={styles.description}> De nos jours, une stratégie marketing solide est nécessaire pour assurer une présence en ligne. Notre équipe vous aidera à créer une marque et à développer tous vos actifs numériques. Veillez à ce que votre site Web soit consulté.  </p>
            </div>
            
            
            
            </>:
            <> 
            <h2 className={styles.title}> Transformation Numérique</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Automatisation des tâches répétitives</li>
                <li className={styles.listElement}>Utilisation de logiciels tiers pour optimiser les processus de l'entreprise</li>
                <li className={styles.listElement}>Mise à jour des logiciels obsolètes</li>
                <li className={styles.listElement}>Création de boutiques en ligne</li>
        
                
                
                </ul>
            <p className={styles.description}>Les meilleures entreprises ont besoin des meilleures technologies. Nous pouvons vous aider à migrer vos anciens logiciels vers des solutions d'avenir, à lancer ou à améliorer votre site web, 
                              lancer une nouvelle stratégie numérique complète pour améliorer votre présence en ligne ou tout autre besoin numérique que vous pourriez avoir. </p>
            </div>
                 </>}
                
                </div>
           
            </div>
        </div>
        </>
    )
}

export default WebPanel