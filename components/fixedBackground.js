import { PinDropSharp } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"



const FixedBackground = (props) => {
    const [height,setHeight] = useState(0)

    useEffect(()=>{
        const setScroll=()=>{
            setHeight(scrollY)
            const div = document.getElementById("specialScroll")
            div.style.setProperty("background-position",`left ${scrollY}px`)
            
            }
    
    
        window.addEventListener("scroll",setScroll )
        
        return ()=>{ window.removeEventListener("scroll",setScroll)}
    },[height])
   console.log(height)
return ( 
<>
    <div className={styles.specialScroll} id="specialScroll" >
        {props.children}
    </div>
    </>
)
}

export default FixedBackground