import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./parallaxCustom.module.css"

const ParallaxCustom = (props) => { 
                    useMediaQuery
    const [height,setHeight] = useState(0)
 

    useEffect(()=>{
        const setScroll=()=>{
            
        setHeight(scrollY)
        const image = document.getElementById("imageParallax");
        image.style.setProperty("transform",`translateY(${(height-750)*0.5}px)`)}
       
       
        window.addEventListener("scroll",setScroll)
        
        return ()=>{ window.removeEventListener("scroll",setScroll)}
    },[height])

    return(
    <>
    <div className={styles.container} style={{minHeight:props.containerHeight}}>

                <Image src={props.imageSource} layout="fill" id="imageParallax" className={styles.image} />
                <div style={{position:"absolute"}}> {props.children}</div>
      
    </div>
      
    
    
    
        
    </>
)

}

export default ParallaxCustom