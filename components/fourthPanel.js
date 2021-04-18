import { Parallax,Background } from "react-parallax"
import styles from "./fourthPanel.module.css"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import Image from "next/image";

const FourthPanel = () => { 


    return( 
            <Parallax className={styles.container}
            
          
            strength={500}
            
                >

                <Background bgClassName={styles.background}>    
                <Image alt="Montreal at Night" layout="fixed" width={2000} height={1333} src="/images/montrealNight2.jpg" />
            
            </Background>
                <div className={styles.formContainer}>
                <div className={styles.formTitle}>Contact us</div>
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="First Name" /> 
                    <TextField className={`${styles.inputField} ${styles.inputName}`} label="Last Name" />
                    <TextField className={`${styles.inputField} ${styles.inputEmail}`} label="Email" />
                    <TextField autoComplete={false} multiline={true} rows={4} className={`${styles.inputField} ${styles.inputMessage}`} label="Message" />
                    <Button className={styles.submitButton}>Submit</Button>
                </div>
            </Parallax>

    )
}

export default FourthPanel