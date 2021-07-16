import React from "react";
import styles from "./TechStack.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faSass, faGithub, faJsSquare, faReact, faNodeJs, faBootstrap } from '@fortawesome/free-brands-svg-icons'


const TechStack = () => {
  return (
    <>
     <section className={styles.techStackContainer}>
       <div className={styles.techStackHeader}>
        <h2>Tech Stack</h2>
       </div>
       <div className={styles.html}>
        <FontAwesomeIcon  icon={faHtml5} />
       </div>
       <div className={styles.css}>
        <FontAwesomeIcon  icon={faCss3Alt} />
       </div>
       <div className={styles.scss}>
        <FontAwesomeIcon  icon={faSass} />
       </div>
       <div className={styles.github}>
        <FontAwesomeIcon  icon={faGithub} />
       </div>
       <div className={styles.react}>
        <FontAwesomeIcon  icon={faReact} />
       </div>
       <div className={styles.javascript}>
        <FontAwesomeIcon  icon={faJsSquare} />
       </div>
       <div className={styles.nodejs}>
        <FontAwesomeIcon  icon={faNodeJs} />
       </div>
       <div className={styles.bootstrap}>
        <FontAwesomeIcon  icon={faBootstrap} />
       </div>
      </section>
    </>
  );
};

export default TechStack;
