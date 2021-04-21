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


    strength={500}
    bgStyle={{background:"center"}}>

    <Background bgClassName={styles.background}>
        <Image layout="fixed" width={2299} height={1527} alt="building skyline" src="/images/buildingBackground2.jpg" />

    </Background>
          
        <div className={styles.textContainer}>
                <h1 className={styles.title}>Are you looking to grow your business?</h1>
                <h2 className={styles.title}>Sophia is your one-stop solution for all your business and digital needs.</h2>

                <p className={styles.text}>
                    Through our knowledge and passion for finance and technology, we want to help you build up your company to its fullest potential. No need to hire multiple companies anymore. We take care of everything for you.
                </p>
                <div className={styles.iconContainer}> 
                    
                    <div className={styles.iconSingleContainer}>
                        <LanguageIcon className={styles.icon} />
                        <p>Web Development </p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                        <MonetizationOnIcon  className={styles.icon} />
                        <p>Digital Marketing  </p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                        <BusinessCenterIcon className={styles.icon}/>
                        <p>Business Consulting</p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                        <AssessmentIcon  className={styles.icon} />
                        <p>Financial Analysis</p>
                    </div>
                </div>
                </div>



        </Parallax>



    )
}

export default SecondPanel