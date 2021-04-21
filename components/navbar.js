import { useMediaQuery } from "@material-ui/core"
import { useEffect, useState } from "react"
import styles from "./navbar.module.css"

const NavBar = ({height}) => { 
const mobile = useMediaQuery("(max-width:1350px)")
const elements = ["Solutions","Portfolio", "Blog", "About Us"]
const[scroll,setScroll] = useState(false)
const checkScroll = () => window.pageYOffset>0? setScroll(true):setScroll(false)
  useEffect(()=>{
      window.addEventListener("scroll",checkScroll, {passive:true})
    
      return ()=> window.removeEventListener("scroll",checkScroll,{passive:true})
    },[])
return(
    <div className={scroll? styles.containerScrolled:styles.container}>
    {mobile? "":scroll? <div className={styles.circleLogo} />:<div className={styles.circleLogoBlack} />}

        {elements.map((element,i)=> <p key={`element${i}`} className={styles.navBarElements}> {element}</p>)}
    </div>

)

}

export default NavBar