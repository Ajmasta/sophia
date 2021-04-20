import styles from "./secondPanel.module.css"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ParallaxCustom from "./parallaxCustom";
const SecondPanel = () => { 


    return( 
        <>
          
        <ParallaxCustom className={styles.container} mobileHeight={"900px"} containerHeight={"900px"} imageSource={"/images/buildingBackground2.jpg"}>
        <div className={styles.textContainer}>
                <h1 className={styles.title}>Are you looking to grow your business?</h1>
                <h3 className={styles.title}>Sophia is your one-stop solution for all your business and digital needs.</h3>

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



        </ParallaxCustom>

</>

    )
}

export default SecondPanel