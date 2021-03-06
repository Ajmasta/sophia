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
            <ul className={styles.listContainer}>
                <li className={styles.listElement}>Business Plans</li>
                <li className={styles.listElement}> Assessment of New Projects</li>
                <li className={styles.listElement}>Financial and Performance Analysis</li>
                <li className={styles.listElement}>Implementation of Financial Tools</li>
                <li className={styles.listElement}>Financing and Liquidity Optimisation</li>
                
                
                </ul>
            <p className={styles.description}> 
            We have reviewed hundreds of businesses and ventures and can help you optimize the financial side of your company.            </p>
            </div>
              
            </>:active==="2"?<> 
            <h2 className={styles.title}> Strategy Insights</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Comprehensive Strategic Review and Recommandations</li>
                <li className={styles.listElement}> Assessment of Positioning, Strengths, Weaknesses and Opportunities</li>
                <li className={styles.listElement}>Assessment of Competitive Landscape and Industry Trends</li>
                <li className={styles.listElement}>Transformative Strategic Projects</li>
                
                
                </ul>
            <p className={styles.description}> 
            Competition is difficult but we can help you navigate your industry more easily so you can ultimately find your footing in your ecosystem.
             </p>
            </div>
              
            
            
            
            </>:
            <> 
            <h2 className={styles.title}> Best Practices</h2>
            <div className={styles.subTextContainer}>
                <ul className={styles.listContainer}>
                <li className={styles.listElement}>Sales</li>
                <li className={styles.listElement}> Marketing</li>
                <li className={styles.listElement}>Corporate Image</li>
                <li className={styles.listElement}>HR</li>
                <li className={styles.listElement}>Legal</li>
        
                
                
                </ul>
            <p className={styles.description}>Running your business can be tough because owners usually have to be jacks of all trades and there are only so many hours in a day. We can help you make your business more efficient and save you time by helping you implement best practices.  </p>
            </div>
                 </>}
                
                </div>
           
            </div>
        </div>
        
        </>
    )
}

export default BusinessPanel