import styles from "./businessPanel.module.css"
import Image from 'next/image'
import { useEffect, useState } from "react"


const BusinessPanel=({text,picture}) =>{ 
const [active,setActive] = useState("1")
const [visible,setVisible] = useState(false)
const handleClick = (e) => {
    setActive(e.target.id)
}

    return ( 
        <>

        
        <div className={styles.container}>
        
        <div className={styles.infoDisplay}>
        
            <div className={styles.pictureContainer}> 
                <Image className={styles.picture} width={600} height={400} src={picture} alt="cute cat" />
                <div className={styles.pictureBackgroundBlack}></div>
                <div className={styles.pictureBackgroundGold}></div>

            </div>
            <div className={styles.textContainer}> 
           
            <div className={styles.infoPicker}>
            <p onClick={handleClick} id="1" className={active==="1"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Financial Decisions
            </p> 
            <p onClick={handleClick} id="2" className={active==="2"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Strategy Insights
            </p>
            <p onClick={handleClick} id="3" className={active==="3"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Best Practices
            </p>
        </div>
                   

            {active==="1"?
            <>
            <h2 className={styles.title}> Financial Decisions</h2>
            <div className={styles.subTextContainer}>
            
            <p className={styles.description}> 
            Cash is king. We have reviewed thousands of businesses and ventures and can help you optimize the financial side of your company. 
            We will help you assess new projects, manage your finance efficiently through financial tools and analysis, and optimise your capital structure
            </p>
            </div>
                <button className={styles.button}>LEARN MORE</button>
            </>:active==="2"?<> 
            <h2 className={styles.title}> Strategy Insights</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Marketing Strategies</li>
                <li className={styles.listElement}> Social Media Marketing</li>
                <li className={styles.listElement}>SEO Optimization</li>
                <li className={styles.listElement}>Digital Branding</li>
                <li className={styles.listElement}>Ad Campaigns</li>
                
                
                </ul>
            <p className={styles.description}> You need a strong marketing strategy to have an online presence nowadays. Our team will help you to brand and build all your digital assets. Make sure your website gets views. </p>
            </div>
                <button className={styles.button}>LEARN MORE</button>
            
            
            
            </>:
            <> 
            <h2 className={styles.title}> Best Practices</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Coding of scripts for automatization</li>
                <li className={styles.listElement}> Use of 3rd party software for Optimization</li>
                <li className={styles.listElement}>Creation of financial models</li>
        
                
                
                </ul>
            <p className={styles.description}> Are you tired of wasting time doing repetitive tasks? Our team will help you make your business more efficient, by optimizing and automatizing various tasks. </p>
            </div>
                <button className={styles.button}>LEARN MORE</button> </>}
                
                </div>
           
            </div>
        </div>
        
        </>
    )
}

export default BusinessPanel