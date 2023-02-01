import React from "react"
import styles from "./Skills.module.css"
import Tech from "./Tech/Tech"
import Card from "../../UI/Card/Card"

const Skills = (props) => {
    return(
        <Card>
            <div>
                <h2 id="skills" className={styles["title"]}>Skills</h2>
            </div>
            <div className={styles["tech-wrapper"]}>
                <Tech>
                    <i class="fa-brands fa-html5"></i>
                </Tech>
                <Tech>
                    <i class="fa-brands fa-css3-alt"></i>
                </Tech>
                <Tech>
                    <i class="fa-brands fa-js"></i>
                </Tech>
                <Tech>
                    <i class="fa-brands fa-node-js"></i>
                </Tech>
                <Tech>
                    <p className={styles["express"]}>Express</p>
                </Tech>
                <Tech>
                    <img className={styles["mongo"]}  src={require("../../../assets/images/MongoDB_Logomark_White.png")}></img>
                </Tech>
                <Tech>
                    <i class="fa-brands fa-react"></i>
                </Tech>
                <Tech>
                    <i class="fa-brands fa-git-alt"></i>
                </Tech>
            </div>
        </Card>
    )
}

export default Skills