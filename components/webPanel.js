import styles from "./webPanel.module.css"
import Image from 'next/image'
import { useState } from "react"

const WebPanel=({text,picture}) =>{ 
const [active,setActive] = useState("3")

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
            <p onClick={handleClick} id="3" className={active==="3"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>Digital Transformation</p>

            <p onClick={handleClick} id="1" className={active==="1"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>Web Development</p> 
            <p onClick={handleClick} id="2" className={active==="2"? `${styles.infoElementActive} ${styles.infoElement}`:styles.infoElement}>Digital Marketing</p>
        </div>
            {active==="1"?
            <>
            <h2 className={styles.title}> Web Development</h2>
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
                
            </>:active==="2"?<> 
            <h2 className={styles.title}> Digital Marketing</h2>
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
                
            
            
            
            </>:
            <> 
            <h2 className={styles.title}> Digital Transformation</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Automatization of repetitive tasks</li>
                <li className={styles.listElement}> Use of 3rd party software for optimizing company processes</li>
                <li className={styles.listElement}>Upgrading outdated software</li>
                <li className={styles.listElement}>Building online stores</li>
        
                
                
                </ul>
            <p className={styles.description}> The best businesses require the best technologies. We can help you migrate your legacy softwares to future-proof solutions, launch or improve your website, 
                              launch a complete new digital strategy to improve your online presence or any other digital need you might have.</p>
            </div>
                 </>}
                
                </div>
           
            </div>
        </div>
        </>
    )
}

export default WebPanel