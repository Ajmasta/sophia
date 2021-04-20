import styles from "./contactUs.module.css"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import ParallaxCustom from "./parallaxCustom";

const ContactUs = () => { 
  const [height,setHeight] = useState(0)
 

useEffect(()=>{
    const setScroll=()=>{console.log(height) ; setHeight(window.pageYOffset)}


    window.addEventListener("scroll",setScroll)
    
    return ()=>{ window.removeEventListener("scroll",setScroll)}
},[height])
    return( 
            <>
        <ParallaxCustom containerHeight={"1200px"} imageSource={"/images/montrealNight2.jpg"} >
                <div  id="containerContact" className={styles.container}  >
                
               
                

                <div className={styles.formContainer}>
                <div className={styles.formTitle}>Contact us</div>
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="First Name" /> 
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="Last Name" />
                    <TextField className={`${styles.inputField} ${styles.inputEmail}`} label="Email" />
                    <TextField autoComplete={"false"} multiline={true} rows={4} className={`${styles.inputField} ${styles.inputMessage}`} label="Message" />
                    <Button className={styles.submitButton}>Submit</Button>
                </div>
                
                </div>
                <p style={{marginBottom:"600px"}}>SCROLL</p>
                </ParallaxCustom>
         </>

    )
}

export default ContactUs