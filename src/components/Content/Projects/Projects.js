import React from "react";
import Card from "../../UI/Card/Card";
import Link from "./Link/Link";
import styles from "./Projects.module.css";

const Projects = (props) => {
  return (
    <Card>
      <h2 id="projects" className={styles["title"]}>
        Check out my projects
      </h2>
      <div className={styles["project-list"]}>
        <div className={styles["project"]}>
          <Link
            name="Dice Roller"
            url="https://dice-roller-xi62.onrender.com/"
            imgSource="Dice_Roller.png"
          />
          {/* <p>Dice Roller is a web app that randomly generates dice roll values for all your TTRPG needs. Created using node.js, express, EJS (HTML templating language), CSS, and JavaScript.</p> */}
        </div>
        <div className={styles["project"]}>
          <Link
            name="Ocean's Collection"
            url="https://oceans-collection.onrender.com/"
            imgSource="Oceans_Collection.png"
          />
          {/* <p>Ocean's Collection is a fictional auction for Ocean's 11's stolen goods.  It features authentication, authorization, and CRUD capability</p> */}
        </div>
        <div className={styles["project"]}>
          <Link
            name="Initiative Tracker"
            url="https://initiative-tracker.onrender.com/"
            imgSource="Initiative_Tracker.png"
          />
          {/* <p>Initiative Tracker is a way to track combat initiatives in TTRPG games.</p> */}
        </div>
      </div>
    </Card>
  );
};

export default Projects;
