import React from "react"
import Card from "../../UI/Card/Card"
import styles from "./Contact.module.css"

const Contact = (props) => {
    return(
        <Card>
            <h2 id="contact" className={styles.title}>Contact me</h2>
            <div className={styles["contacts"]}>
                <div className={styles["child"]}>
                    <a className={styles["brand"]} href="mailto:steven.sares@outlook.com">
                        <i class="fa-solid fa-square-envelope"></i>
                    </a>
                </div>
                <div className={styles["child"]}>
                    <a className={styles["brand"]} href="https://github.com/leafonthewindows">
                        <i class="fa-brands fa-github"></i>
                    </a>
                </div>
                <div className={styles["child"]}>
                    <a className={styles["brand"]} href="https://www.linkedin.com/in/stevensares">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </Card>
    )
}

export default Contact