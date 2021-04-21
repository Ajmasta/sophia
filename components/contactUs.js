import styles from "./contactUs.module.css"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import ParallaxCustom from "./parallaxCustom";
import FixedBackground from "./fixedBackground";
import NavBar from "./navbar";

const ContactUs = ({height}) => { 

 


   
    return( 
            <>
            <NavBar />
                <FixedBackground height={height}>

                <div className={styles.textContainer}>
                    <div className={styles.textTitle}>
                        Let's Start a Project Together
                    </div>

                    <div className={styles.text}>
                        We are eager to listen to you, evaluate your needs, and start working together. <br/>
                        Send us a message so we can start as quickly.
                    </div>
                    </div>

                </FixedBackground>
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
               
         </>

    )
}

export default ContactUs