import React from 'react';
import styles from './Nav.module.css'



const NavBar = (props) => {
  const modalHandler = () => {
    props.onOpenModal()
  }
  return (
      <nav className={styles["nav-bar"]}>
        <div className={styles["home"]}>
          <i>
            <a href="#intro">Steven Sares</a>
          </i>
        </div>
        <div id="modal" className={styles["modal-icon-div"]} onClick={modalHandler}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className={styles["downpage-links"]}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
  );
};

export default NavBar;