
import { Parallax } from "react-parallax"
import styles from "./parallaxPanel.module.css"
const ParallaxPanel = () => { 
 
return(

    <Parallax 
    bgImage={"https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"} 
   className={styles.parallax}
   strength={500}
   
    bgStyle={{background:"center"}}
    >

    </Parallax>
) 
  
}

export default ParallaxPanel






