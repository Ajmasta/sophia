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
                <h1 className={styles.title}>Do you want to bring your business to a new dimension? </h1>
                <h2 className={styles.title}>Sophia is the one-stop solution for business owners.</h2>

                <p className={styles.text}>
                Through our experience and passion for business and technology, we will help you build up your company to its fullest potential. Whether it’s to prepare your business for more growth,  to run it more efficiently, or to improve your online presence we can help you. 
                </p>
                <div className={styles.iconContainer}> 
                    
                    <div className={styles.iconSingleContainer}>
                        <LanguageIcon className={styles.icon} />
                        <p>Digital Transformation </p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                        <MonetizationOnIcon  className={styles.icon} />
                        <p>Optimize your financial decisions </p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                    <AssessmentIcon  className={styles.icon} />
                        <p>Obtain strategy insights</p>
                    </div>
                    <div className={styles.iconSingleContainer}>
                    <BusinessCenterIcon className={styles.icon}/>
                       
                        <p>Implement best practices</p>
                    </div>
                </div>
                </div>



        </Parallax>



    )
}

export default SecondPanel