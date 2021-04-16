import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./firstPanel.module.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';

// one panel that turns into gold, one panel "leave your mark, make your marks on the web", one panel "build efficient business strategies", one panel ""
const FirstPanel = () => {
    let timeout = ""
    const [subTextArray,setSubTextArray]= useState(["Business consulting","Web development","Workflow optimization","Financial advising"])
    const mobile = useMediaQuery("(max-width:800px)")
    console.log(mobile,"mobile")
    useEffect(()=>{
       
       requestAnimationFrame(animateFunction)

       const root = document.querySelector(":root") 
       
       const width = document.getElementById("letterContainer").offsetWidth
       console.log(width)
       if (width>100){
       root.style.setProperty("--sophiaWidth",(width-85.5) +"px")
       root.style.setProperty("--sophiaWidthN",(-width+85.5)+"px")
       }
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

    const handleMouseEnterLetter = (e) => { 
        //e.target.style.color = "black"

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
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Karantina:wght@300&family=Philosopher:wght@700&family=Sofia&family=Spectral:wght@500&display=swap" rel="stylesheet" />        </Head>
        <div onMouseMove={(e)=>handleMouseMove(e)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className={styles.container}>
        <div id="circleCursor" className={styles.circle} />
        
        <div className={styles.upperContainer}>
            <div className={styles.topBar}>
            <div className={styles.topBarBullet} ></div>
            </div>
      
            <div id={"letterContainer"} className={styles.letterContainer}>
                <div className={styles.leftBar}>
                    <div className={styles.leftBarBullet} ></div>
                </div>
                <span onMouseEnter={handleMouseEnterLetter}  id="letter1"  className={styles.letter1}>S</span>
                <span onMouseEnter={handleMouseEnterLetter} id="letter2" className={styles.letter2}>O</span>
                <span onMouseEnter={handleMouseEnterLetter} id="letter3" className={styles.letter3}>P</span>
                <span onMouseEnter={handleMouseEnterLetter} id="letter4" className={styles.letter4}>H</span>
                <span onMouseEnter={handleMouseEnterLetter} id="letter5" className={styles.letter5}>I</span>
                <span onMouseEnter={handleMouseEnterLetter} id="letter6" className={styles.letter6}>A</span>
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
                if (i===0) return <p key={subtext}  id={styles.subText0}  className={`${styles.subText} ${styles.subText0Animate} `}>  {mobile? subtext + "|": subtext + " |"} </p>
                if (i===1) return <p key={subtext}  id={styles.subText1}  className={`${styles.subText} ${styles.subText1Animate}  `}> {subtext} {mobile? "":"|"}  </p>
                if (i===2 &&!mobile) return <p key={subtext}  id={styles.subText2}  className={`${styles.subText} ${styles.subText2Animate}  `}>  {subtext}  </p>
            })}
        </div>
        </div>
        
     
        <div className={styles.image} >
        <Image width={131} height={212} src="/images/owl.png" />
        </div>
        <div className={styles.contactContainer}>
            <button className={styles.contactButton}>Contact us</button>
        </div>
    </div>
    </>
        )
    }
    
export default FirstPanel


   /* moving letters
        const letter1 = document.getElementById("letter1")
        const letter2 = document.getElementById("letter2")
        const letter3 = document.getElementById("letter3")
        const letter4 = document.getElementById("letter4")
        const letter5 = document.getElementById("letter5")
        const letter6 = document.getElementById("letter6")
        letter1.style.transform = `translate3d(${e.clientX/12}px,${-e.clientY/18}px,${e.clientY/10}px)`
        letter2.style.transform = `translate3d(${e.clientX/15}px,${e.clientY/8}px,${e.clientY/10}px)`
        letter3.style.transform = `translate3d(${e.clientX/12}px,${-e.clientY/18}px,${e.clientY/10}px)`
        letter4.style.transform = `translate3d(${e.clientX/15}px,${e.clientY/12}px,${e.clientY/10}px)`
        letter5.style.transform = `translate3d(${e.clientX/12}px,${-e.clientY/18}px,${e.clientY/10}px)`
        letter6.style.transform = `translate3d(${e.clientX/13}px,${e.clientY/10}px,${e.clientY/10}px)`
        */

        /*<div className={styles.unmovingTextContainer}>
        <p> Your one-stop solution for </p>
        </div>*/


        /* 
                <div className={styles.movingTextContainer}>
        {subTextArray.map((subtext,i)=>{
            if (i===0) return <p key={subtext}  id={styles.subText0}  className={`${styles.subText} ${styles.subText0Animate}`}> {subtext}</p>
            if (i===1) return <p key={subtext}  id={styles.subText1}  className={`${styles.subText} ${styles.subText1Animate}`}> {subtext}</p>
            if (i===2) return <p key={subtext}  id={styles.subText2}  className={`${styles.subText} ${styles.subText2Animate}`}> {subtext}</p>

        })}
     <p key={subTextArray[3]}  id={styles.subText3} className={`${styles.subText} ${styles.subText3Animate}`}> {subTextArray[3]}</p>
     </div>
        
        */