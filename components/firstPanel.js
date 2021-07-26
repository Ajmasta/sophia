import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./firstPanel.module.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';

// one panel that turns into gold, one panel "leave your mark, make your marks on the web", one panel "build efficient business strategies", one panel ""
const FirstPanel = () => {
    const [subTextArray,setSubTextArray]= useState(["Business consulting","Web development","Social Media","Workflow optimization","Financial advising"])
    const mobile = useMediaQuery("(max-width:800px)")
    const [owlArray,setOwlArray] = useState([])
    console.log(mobile,"mobile")
    
    useEffect(()=>{
       requestAnimationFrame(animateFunction)
       const root = document.querySelector(":root") 
       const width = document.getElementById("letterContainer").offsetWidth
       if (width>100){
       root.style.setProperty("--sophiaWidth",(width-85.5) +"px")
       root.style.setProperty("--sophiaWidthN",(-width+85.5)+"px")
       }
       return
    },[subTextArray])

    const animateFunction = () => {
               
                setTimeout(()=>{
                subTextArray.push(subTextArray.splice(0,1))
                setSubTextArray([...subTextArray])
               
                },5800)
            
    }
  
    const handleMouseMove=(e) => {
       
        const circleCursor = document.getElementById("circleCursor")
        circleCursor.style.left= `${e.clientX}px`
        circleCursor.style.top= `${e.clientY+scrollY}px`

    }

    const handleMouseClick= (e) => {
        const width = document.getElementById("containerFirstPanel").offsetWidth
        console.log("container",width)
         const leftPosition = e.clientX > width-51?`${width-51}px` :`${e.clientX}px`
        const topPosition = `${e.clientY+scrollY}px`
        setOwlArray([...owlArray,{leftPosition,topPosition}])
    }

const handleMouseLeave = () => { 
    const circleCursor = document.getElementById("circleCursor")
    circleCursor.style.display="none"
}
const handleMouseEnter = (e) => { 
    const circleCursor = document.getElementById("circleCursor")
    circleCursor.style.display="" 

}
    return(
        <>
        <Head>

        </Head>
        <div id="containerFirstPanel" onMouseMove={(e)=>handleMouseMove(e)} onClick={handleMouseClick} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className={styles.container}>
        <div id="circleCursor" className={styles.circleCursor} />
        {owlArray.map((owl,i)=><div key={`owl${i}`} className={`${styles.circleLogo} ${styles.circleAnimate}`} style={{position:"absolute",top:owl.topPosition, left:owl.leftPosition}}/>)}
        <div className={styles.upperContainer}>
            <div className={`${styles.circleLogo} ${styles.mobileCircle}`} ></div>
            <div className={styles.topBar}>
            <div className={styles.topBarBullet} ></div>
            </div>
      
            <div id={"letterContainer"} className={styles.letterContainer}>
                <div className={styles.leftBar}>
                    <div className={styles.leftBarBullet} ></div>
                </div>
                <span   id="letter1"  className={styles.letter1}>S</span>
                <span  id="letter2" className={styles.letter2}>O</span>
                <span  id="letter3" className={styles.letter3}>P</span>
                <span  id="letter4" className={styles.letter4}>H</span>
                <span  id="letter5" className={styles.letter5}>I</span>
                <span  id="letter6" className={styles.letter6}>A</span>
                <div className={styles.rightBar}>
                    <div className={styles.rightBarBullet} ></div>
                </div>
            </div>
        <div className={styles.bottomBar}><div className={styles.bottomBarBullet}></div></div>
        </div>
        <div className={styles.subTextContainer}>
        {/* one stop*/}
        <div className={styles.horizontalTextContainer}>
            {subTextArray.map((subtext,i)=>{
                if (i===0) return <span key={subtext+i}> <p   id={styles.subText0}  className={`${styles.subText} ${styles.subText0Animate} `}>  {subtext}  </p> <p className={`${styles.subText} ${styles.subText0Animate} `}> | </p></span>
                if (i===1) return <span key={subtext+i}> <p   id={styles.subText1}  className={`${styles.subText} ${styles.subText1Animate}  `}> {subtext}   </p> {mobile? "": <p className={`${styles.subText} ${styles.subText1Animate} `}> | </p>}</span>
                if (i===2 &&!mobile) return <p key={subtext+i}  id={styles.subText2}  className={`${styles.subText} ${styles.subText2Animate}  `}>  {subtext}  </p>
            })}
        </div>
        </div>
        
     
        <div className={styles.image} >
        <Image width={100} height={162} alt="owl Logo" src="/images/owl.png" />
        </div>
        <div className={styles.contactContainer}>
            <button className={styles.contactButton}>Contact us</button>
        </div>
    </div>
    </>
        )
    }
    
export default FirstPanel


 