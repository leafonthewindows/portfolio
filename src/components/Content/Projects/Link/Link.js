import React from "react";
import styles from "./Link.module.css";

const Link = (props) => {
  return (
    <div className={styles.link}>
      <a
        className={styles.anchor}
        href={props.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="link to project"
      >
        <img
          className={styles["link-pic"]}
          src={require(`../../../../assets/images/${props.imgSource}`)}
          alt="picture of website"
        />
        <p className={styles.title}>{props.name}</p>
      </a>
    </div>
  );
};

export default Link;
