import styles from "./contactUs.module.css"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import ParallaxCustom from "./parallaxCustom";
import FixedBackground from "./fixedBackground";
import NavBar from "./navbar";

const ContactUs = () => { 
    const sendMail = async (e) => {
        const data={name:e.target.name.value, email:e.target.email.value, subject:e.target.subject.value, message:e.target.message.value}
        try {
          await fetch("/api/contact", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(data)
          })
    
                //if sucess do whatever you like, i.e toast notification
          //setTimeout(() => reset(), 2000);
        } catch (error) {
            console.log(error)
        }
    
      }
    return( 
            <>
        
        <FixedBackground >
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
                    <div  id="containerContact" className={styles.container} >
                <form onSubmit={(e)=>{e.preventDefault();
                                sendMail(e)}} >
                <div className={styles.formContainer}>
                <div className={styles.formTitle}>Contact us</div>
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="Name" name="name"/> 
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="Email" name="email" />
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="Subject" name="subject"/> 
                    <TextField autoComplete={"false"} multiline={true} rows={4} className={`${styles.inputField} ${styles.inputMessage}`} label="Message" name="message"/>
                    <Button type="submit" className={styles.submitButton}>Submit</Button>
                </div>
                </form>
                </div>
               
         </>

    )
}

export default ContactUs