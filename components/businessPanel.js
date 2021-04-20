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
            Business Strategies
            </p> 
            <p onClick={handleClick} id="2" className={active==="2"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Financial Analysis
            </p>
            <p onClick={handleClick} id="3" className={active==="3"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>
            Merger and acquisition
            </p>
        </div>
                   

            {active==="1"?
            <>
            <h2 className={styles.title}> Business Strategies</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}> Full-stack web development</li>
                <li className={styles.listElement}>Progressive Web Apps</li>
                <li className={styles.listElement}>React-native apps</li>
                <li className={styles.listElement}>Landing Pages</li>
                <li className={styles.listElement}>Wordpress websites</li>
                
                </ul>
            <p className={styles.description}> 
            We believe in the importance of aesthetics, user-friendliness and business-oriented practices for websites. Our team will build future-proof websites and apps that will represent and enhance your brand.</p>
            </div>
                <button className={styles.button}>LEARN MORE</button>
            </>:active==="2"?<> 
            <h2 className={styles.title}> Financial Analysis</h2>
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
            <h2 className={styles.title}> Merger and acquisition</h2>
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