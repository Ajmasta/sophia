import styles from "./secondPanel.module.css"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ParallaxCustom from "./parallaxCustom";
import { Background, Parallax } from "react-parallax";
import Image from "next/image";
const SecondPanel = () => { 


    return (
    <Parallax className={styles.container}


    strength={400}
    bgStyle={{background:"center"}}>

    <Background bgClassName={styles.background}>
        <Image layout="fixed" width={2299} height={1527} alt="building skyline" src="/images/buildingBackground2.jpg" />

    </Background>
          
        <div className={styles.textContainer}>
                <h1 className={styles.title}>Voulez-vous donner une nouvelle dimension à votre entreprise ? </h1>
                <h2 className={styles.title}>Sophia est la solution tout-en-un pour votre entreprise.</h2>

                <p className={styles.text}>
                Grâce à notre expérience et à notre passion pour les affaires et la technologie, nous vous aiderons à développer votre entreprise au maximum de son potentiel. Que ce soit pour préparer votre entreprise à une plus grande croissance, pour la gérer plus efficacement ou pour améliorer votre présence en ligne, nous pouvons vous aider.  
                </p>
                <div className={styles.iconContainer}> 
                    
                    <div className={styles.iconSingleContainer}>
                        <LanguageIcon className={styles.icon} />
                        <p> Transformation Numérique </p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                        <MonetizationOnIcon  className={styles.icon} />
                        <p>Optimisez vos décisions financières</p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                    <AssessmentIcon  className={styles.icon} />
                        <p> Obtenez des perspectives stratégiques</p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                    <BusinessCenterIcon className={styles.icon}/>
                       
                        <p>Implémentez les meilleures pratiques</p>
                    </div>
                </div>
                </div>



        </Parallax>



    )
}

export default SecondPanel