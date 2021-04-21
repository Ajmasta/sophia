import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"
import Image from "next/image";



const FixedBackground = (props) => {
    const [height,setHeight] = useState(0)
    useEffect(()=>{
        const setScroll=()=>{
            const div = document.getElementById("specialScroll")
           //setHeight(pageYOffset)
            
            }
    
    const setAnimation = () => window.requestAnimationFrame(setScroll)
        window.addEventListener("scroll",setAnimation,{passive:true} )
        
        return ()=>{ window.removeEventListener("scroll",setScroll,{passive:true})}
    },[])
return ( 
<> 
    <div className={styles.specialScroll} >
    <img src="/images/montrealNight2.jpg" id="specialScroll"  style={{top:height}} alt="montreal at night" className={styles.image} />
    {props.children}
    </div>


    </>
)
}

export default FixedBackground