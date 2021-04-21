import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"
import Image from "next/image";



const FixedBackground = (props) => {
    const [height,setHeight] = useState(0)

    useEffect(()=>{
        const setScroll=()=>{
            setHeight(scrollY)
            const div = document.getElementById("specialScroll")
            div.style.setProperty("top",`${scrollY}px`)
            
            }
    
    
        window.addEventListener("scroll",setScroll )
        
        return ()=>{ window.removeEventListener("scroll",setScroll)}
    },[height])
   console.log(height)
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