import { useEffect, useState } from "react";
import styles from "./fixedBackground.module.css"
import Image from "next/image";



const FixedBackground = (props) => {
 
return ( 
<> 
    <div className={styles.specialScroll} >
    <img src="/images/montrealNight2.jpg" width={1200} height={800}  loading="lazy" className={styles.image} alt="montreal at night" /> 
        <div className={styles.propsContainer}>
                {props.children}
        </div>
    </div>


    </>
)
}

export default FixedBackground