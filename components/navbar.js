import { useEffect, useState } from "react"
import styles from "./navbar.module.css"

const NavBar = ({}) => { 
const elements = ["Home", "About","Contact Us"]
const[scroll,setScroll] = useState(false)
const checkScroll = () => window.scrollY>0? setScroll(true):setScroll(false)
  useEffect(()=>{
      window.addEventListener("scroll",checkScroll)
    
    })
return(
    <div className={scroll? styles.containerScrolled:styles.container}>
        {elements.map((element,i)=> <p key={`element${i}`}> {element}</p>)}
    </div>

)

}

export default NavBar