import { PinDropSharp } from "@material-ui/icons";
import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"



const FixedBackground = (props) => {
    const [height,setHeight] = useState(0)

    useEffect(()=>{
        const setScroll=()=>{setHeight(window.scrollY)}
    
    
        window.addEventListener("scroll",setScroll )
        
        return ()=>{ window.removeEventListener("scroll",setScroll)}
    },[height])
   console.log(height)
return ( 
<>
    <div className={styles.specialScroll}  style={{backgroundPosition:`left ${height}px`}}>
        {props.children}
    </div>
    </>
)
}

export default FixedBackground