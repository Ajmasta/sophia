import { useEffect } from "react"
import FixedBackground from "./fixedBackground"
import styles from "./fixedBackgroundSticky.module.css"


const FixedBackgroundSticky = (props) => {
   
    useEffect(()=>{
        const sticky  = document.getElementById("sticky")
        const initialTop  = sticky.getBoundingClientRect().top
    window.addEventListener("scroll", ()=>{
        const stickyPos= sticky.getBoundingClientRect()
        console.log("pos",stickyPos)
        if (stickyPos.top <=100 ){
        sticky.style.setProperty("position","fixed")
        sticky.style.setProperty("z-index","-1")
        console.log("fixed")
        }else{

        }
        console.log(scrollY)
    })
     return () => window.removeEventListener("scroll", ()=>console.log(sticky.getBoundingClientRect()))
    }
    ,[])


    return(
        <>
                <div className={styles.filler}>a</div>

        <div className={styles.container}>

        <div className={styles.stickyContainer} id="sticky">
            <img src="/images/montrealNight2.jpg" width={1200} height={800}  loading="lazy" className={styles.image} alt="montreal at night" /> 
            <div className={styles.textContainer}>
                    <div className={styles.textTitle}>
                        Let's Start a Project Together
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