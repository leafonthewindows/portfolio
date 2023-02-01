import React from "react"
import Card from "../../UI/Card/Card"
import styles from "./About.module.css"

const About = (props) => {
    return(
        <Card>
            <h2 id="about" className={styles["title"]}>About Me</h2>
            <div className={styles["about-div"]}>
                <p className={styles["about-paragraph"]}>So you want to know about the guy behind the code?  Well I'm just a nerd who loves games.  Board games, football games, video games, TTRPGs you name it.  And coding? I love that too.  I love building something brand new out of the ether. Let me build something for you too!
                </p>
            </div>
        </Card>
    )
}

export default About