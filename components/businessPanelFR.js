import styles from "./businessPanel.module.css"
import Image from 'next/image'
import { useEffect, useState } from "react"


const BusinessPanel=({text,picture}) =>{ 
const [active,setActive] = useState("1")
const [visible,setVisible] = useState(false)
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
            <p onClick={handleClick} id="1" className={active==="1"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Décisions Financières
            </p> 
            <p onClick={handleClick} id="2" className={active==="2"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Perspective Stratégiques
            </p>
            <p onClick={handleClick} id="3" className={active==="3"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Meilleures Pratiques
            </p>
        </div>
                   

            {active==="1"?
            <>
            <h2 className={styles.title}> Décisions Financières</h2>
            <div className={styles.subTextContainer}>
            <ul className={styles.listContainer}>
                <li className={styles.listElement}>Plans d'Affaires</li>
                <li className={styles.listElement}> Évaluation de Nouveaux Projets</li>
                <li className={styles.listElement}>Analyse des finances et des performances</li>
                <li className={styles.listElement}>Implémentation d'Outils Financiers</li>
                <li className={styles.listElement}>Optimisation du Financement et de la Liquidité</li>
                
                
                </ul>
            <p className={styles.description}> 
            Nous avons examiné des centaines d'entreprises et de projets et nous pouvons vous aider à optimiser l'aspect financier de votre entreprise. </p>
            </div>
                
            </>:active==="2"?<> 
            <h2 className={styles.title}> Perspectives Stratégiques</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Évaluation Stratégique Complète et Recommandations</li>
                <li className={styles.listElement}>Évaluation du Positionnement, des Forces, des Faiblesses et des Opportunités. </li>
                <li className={styles.listElement}>Évaluation du Paysage Concurrentiel et des Tendances de l'Industrie</li>
                <li className={styles.listElement}>Projets stratégiques transformateurs</li>
                
                
                </ul>
            <p className={styles.description}> 
            La concurrence est difficile mais nous pouvons vous aider à naviguer plus facilement dans votre secteur pour que vous puissiez finalement trouver votre place dans votre écosystème.
</p>
            </div>
                
            
            
            
            </>:
            <> 
            <h2 className={styles.title}> Best Practices</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Ventes</li>
                <li className={styles.listElement}> Marketing</li>
                <li className={styles.listElement}>Image d'Entreprise</li>
                <li className={styles.listElement}>Ressources Humaines</li>
                <li className={styles.listElement}>Juridique</li>
        
                
                
                </ul>
            <p className={styles.description}>
            La gestion d'une entreprise peut s'avérer difficile car les propriétaires doivent généralement portent  plusieurs chapeaux et il n'y a qu'un nombre limité d'heures dans une journée. Nous pouvons vous aider à rendre votre entreprise plus efficace et vous faire gagner du temps en vous aidant à mettre en œuvre de meilleures pratiques. 

             </p>
            </div>
            </>}
                </div>
           
            </div>
        </div>
        
        </>
    )
}

export default BusinessPanel