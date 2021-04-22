
import { Button, TextField } from "@material-ui/core"
import styles from "./aboutUs.module.css"
import Link from 'next/link'
import {useState } from "react"
import AnimateHeight from 'react-animate-height';
import VisibilitySensor from 'react-visibility-sensor';

const AboutUs = () => {
    const [visible,setVisible] = useState(false)
    const[height,setHeight] = useState(0)
  
   
            const handleVisible=(isVisible)=>{
                console.log(window.innerHeight)
                setVisible(isVisible)
                isVisible? setHeight(window.innerHeight):setHeight(0)
            }
    return(
        <>
        <div className={styles.margin}><VisibilitySensor onChange={handleVisible}><p>a</p></VisibilitySensor></div>
            <div className={styles.anchor}>
            
             <AnimateHeight duration={1000} height={height} className={"endScroll"}>
        <div id="placeholder" className={styles.placeholder}>
          

        <div className={visible? `${styles.container} ${styles.containerFade}`:styles.container}>
        


            <div className={styles.title}>
                <p>Get Started </p>
            </div>
        {/*<div className={styles.text}>
            <div className={styles.subTextLeftContainer}>
                    <p className={styles.subTextTitle}>Our Vision</p>
                <p className={styles.subTextLeft}> We are a team comprised of web and business experts. We realized that to build a succesful website,
                you need a good business sense. Likewise, to build a good business, you need a strong online presence. 
                It seemed logical for us to combine both web development and business consulting to help companies create financial and business plans and also to help them put those plans into practice through a strong digital strategy.</p>
                </div>
              
            <div className={styles.subTextRightContainer}>
            <p className={styles.subTextTitle}>Our Team</p>

                <p className={styles.subTextRight}> We are a team comprised of web and business experts. We realized that to build a succesful website,
                you need a good business sense. Likewise, to build a good business, you need a strong online presence. 
                It seemed logical for us to combine both web development and business consulting to help companies create financial and business plans and also to help them put those plans into practice through a strong digital strategy.</p>
                </div>
        
        </div>*/}


        <Link href="contact"><Button className={styles.submitButton}> Start a Project </Button></Link>
        <Link href="contact"><Button  className={styles.submitButton}> Meet Our Team</Button></Link>

        <Link href="contact"><Button className={styles.submitButton}> Learn About Our Process</Button></Link>

        <Link href="contact"><Button className={styles.submitButton}> Contact Us</Button></Link>


        </div>
        </div>
</AnimateHeight>
       

        </div>

</>
    )


}

export default AboutUs