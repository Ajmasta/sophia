import styles from "./numberedListContainer.module.css"
import NumberedListImageElement from "./numberedListImageElement"
import NumberedListTextElement from "./numberedListTextElement"
const NumberedListContainer = () => {

    return(

        <div className={styles.container}>
            <NumberedListImageElement title={"1."} image={"/images/calendar.png"} text={"Set up a date"} />
            <NumberedListImageElement title={"2."} image={"/images/chart.png"} text={"Track Your Data"} />
            <NumberedListImageElement title={"3."} image={"/images/calendar.png"} text={"Set up a date"} />

        </div>
    )
}

export default NumberedListContainer