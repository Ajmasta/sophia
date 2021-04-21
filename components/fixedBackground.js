import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"
import Image from "next/image";



const FixedBackground = (props) => {
    const [height,setHeight] = useState(0)
    useEffect(()=>{
        const setScroll=()=>{
            const div = document.getElementById("specialScroll")
           setHeight(pageYOffset)
            
            }
    
    const setAnimation = () => window.requestAnimationFrame(setScroll)
        window.addEventListener("scroll",setAnimation,{passive:true} )
        
        return ()=>{ window.removeEventListener("scroll",setScroll,{passive:true})}
    },[])
return ( 
<> 
    <div className={styles.specialScroll} >
    <Image src="/images/montrealNight2.jpg" width={1200} height={800}  layout={"fixed"} className={styles.image} alt="montreal at night" /> 
    {props.children}
    </div>


    </>
)
}

export default FixedBackground