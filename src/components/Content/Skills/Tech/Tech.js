import React from "react";
import styles from "./Tech.module.css";

const Tech = (props) => {
    return( 
    <div className={styles["tech"]}>
        {props.children}
    </div>)
}

export default Tech;