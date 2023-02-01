import React from "react"
import Card from "../../UI/Card/Card"
import styles from "./Intro.module.css"

const Intro = (props) => {
    return(
        <Card>
            <div className={styles["intro-wrapper"]}>
                <div className={styles["small-pic-div"]}>
                    <img className={styles["small-pic"]} src={require("../../../assets/images/Fotor_Face_Small.png")} alt="colorful abstract picture"/>
                </div>
                <div className={styles["text"]}>
                    <h1>From idea to screen and everything between.</h1>
                    <p>I'm a full-stack web developer ready to flex my skills for your latest endeavors.  Let's build something great together!</p>
                </div>
                <div className={styles["large-pic-div"]}>
                    <img className={styles["large-pic"]} src={require("../../../assets/images/Fotor_Face.png")} alt="portrait painting"/>
                </div>
            </div>

        </Card>
    )
}

export default Intro