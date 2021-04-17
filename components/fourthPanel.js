import { Parallax } from "react-parallax"
import NumberedListContainer from "./numberedListContainer"
import styles from "./FourthPanel.module.css"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

const FourthPanel = () => { 


    return( 
            <Parallax className={styles.container}
            
            bgImage={"/images/montrealNight2.jpg"} 
            bgImageAlt="Montreal at Night"
            bgImageStyle={{height:"150%"}}
            strength={500}
            bgStyle={{backgroundSize:"contain"}}>
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