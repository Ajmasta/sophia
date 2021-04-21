import { useMediaQuery } from "@material-ui/core"
import styles from "./navbar.module.css"

const NavBar = (props) => { 
const mobile = useMediaQuery("(max-width:1350px)")
const elements = ["Solutions","Portfolio", "Blog", "About Us"]
return(
    <div className={props.height>0? styles.containerScrolled:styles.container}>
    {mobile? "":props.height>0? <div className={styles.circleLogo} />:<div className={styles.circleLogoBlack} />}

        {elements.map((element,i)=> <p key={`element${i}`} className={styles.navBarElements}> {element}</p>)}
    </div>

)

}

export default NavBar