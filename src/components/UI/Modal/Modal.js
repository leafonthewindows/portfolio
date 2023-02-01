import React from "react";
import Button from "../Button/Button"
import styles from "./Modal.module.css";

const Modal = (props) => {
    const modalHandler = () => {
        props.onCloseModal()
      }
    return (
        <div className={styles["modal"]}>
            <div className={styles["close-formatting"]}>
                <div className={styles["close-button"]} onClick={modalHandler}>
                    <i class="fa-regular fa-x"></i>
                </div>
            </div>
            <div>
                <Button>
                    <a href="#about" className={styles["downpage-link"]} onClick={modalHandler}>About</a>
                </Button>
                <Button>
                    <a href="#skills" className={styles["downpage-link"]} onClick={modalHandler}>Skills</a>
                </Button>
                <Button>
                    <a href="#projects" className={styles["downpage-link"]} onClick={modalHandler}>Projects</a>
                </Button>
                <Button>
                <a href="#contact" className={styles["downpage-link"]} onClick={modalHandler}>Contact</a>
                </Button>
            </div>
        </div>
    )
}

export default Modal;