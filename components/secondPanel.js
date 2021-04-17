import { Parallax } from "react-parallax"
import NumberedListContainer from "./numberedListContainer"
import styles from "./secondPanel.module.css"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LanguageIcon from '@material-ui/icons/Language';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AssessmentIcon from '@material-ui/icons/Assessment';
const SecondPanel = () => { 


    return( 
            <Parallax className={styles.container}
            
            bgImage={"https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"} 
           
            strength={500}
            bgStyle={{background:"center"}}>
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
                        <p>Digital Marketing Strategies </p>
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