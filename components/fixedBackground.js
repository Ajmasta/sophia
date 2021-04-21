import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"
import Image from "next/image";



const FixedBackground = (props) => {

    useEffect(()=>{
        const setScroll=()=>{
            const div = document.getElementById("specialScroll")
            div.style.setProperty("top",`${pageYOffset}px`)
            
            }
    
    const setAnimation = () => window.requestAnimationFrame(setScroll)
        window.addEventListener("scroll",setAnimation,{passive:true} )
        
        return ()=>{ window.removeEventListener("scroll",setAnimation,{passive:true})}
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