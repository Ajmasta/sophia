import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"
import Image from "next/image";



const FixedBackground = (props) => {

    useEffect(()=>{
        const setScroll=()=>{
            const div = document.getElementById("specialScroll")
            div.style.setProperty("top",`${pageYOffset}px`)
            
            }
    
    
        window.addEventListener("scroll",setScroll,{passive:true} )
        
        return ()=>{ window.removeEventListener("scroll",setScroll,{passive:true})}
    },[])
return ( 
<> 
    <div className={styles.specialScroll}   >
    <Image src="/images/montrealNight2.jpg" id="specialScroll" layout="fill" className={styles.image} />
        {props.children}
    </div>
    </>
)
}

export default FixedBackground