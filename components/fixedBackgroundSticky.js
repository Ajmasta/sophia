import { useEffect } from "react"
import FixedBackground from "./fixedBackground"
import styles from "./fixedBackgroundSticky.module.css"


const FixedBackgroundSticky = (props) => {
   
    useEffect(()=>{
        const sticky  = document.getElementById(props.text)
        const initialTop  = sticky.getBoundingClientRect().top
    window.addEventListener("scroll", ()=>{
        const stickyPos= sticky.getBoundingClientRect()
        console.log("scoll",scrollY)
        if (stickyPos.top <=100 ){
        sticky.style.setProperty("position","fixed")
        sticky.style.setProperty("z-index","-1")
        console.log("fixed")
        }else if(scrollY>Math.abs(initialTop)+stickyPos.height){
            sticky.style.setProperty("position","relative")
            sticky.style.setProperty("z-index","0")
        }
        console.log("3", scrollY, Math.abs(initialTop)+stickyPos.height)
    })
     return () => window.removeEventListener("scroll", ()=>console.log(sticky.getBoundingClientRect()))
    }
    ,[])


    return(
        <>
    
        <div className={styles.container}>

        <div className={styles.stickyContainer} id={props.text}>
            <div className={styles.textContainer}>
                    <div className={styles.textTitle}>
                        Let's Start a Project Together {props.text}
                    </div>

                    <div className={styles.text}>
                        We are eager to listen to you, evaluate your needs, and start working together. <br/>
                        Send us a message so we can start as quickly.
                    </div>
                    </div>
                    </div>
                    

        </div>
        <div className={styles.filler}>a</div>
        </>
    )
}

export default FixedBackgroundSticky